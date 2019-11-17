const puppeteer = require("puppeteer");
const fs = require("fs");
const config = require("./config");

(async () => {
  // starting browser
  const browser = await puppeteer.launch({
    headless: config.headless,
    devtools: false,
    defaultViewport: {
      width: 1280,
      height: 720
    }
  });
  const page = await browser.newPage();
  await page.goto(config.host);

  // logining
  await page.waitFor("#index_email");
  await page.type("#index_email", config.username);
  await page.type("#index_pass", config.password);
  await page.click("#index_login_button", { delay: 100 });

  // locating to communities page
  await page.waitForSelector("#top_profile_link");
  await page.goto(config.searchLink);

  // setting type to 'Event'
  await page.click("#dropdown2", 100);
  await page.waitFor(800);
  await page.click("#option_list_options_container_2_3", 100);
  await page.waitFor(800);

  // getting all categories
  await page.click("#dropdown3", 100);
  let typesList = [];
  for (let i = 1; i < 47; i++) {
    const id = "#option_list_options_container_3_" + i;
    const el = await page.$(id);
    const attrVal = await page.evaluate(el => el.getAttribute("val"), el);
    const attrTitle = await page.evaluate(el => el.getAttribute("title"), el);

    const data = { id, value: attrVal, title: attrTitle };
    typesList.push(data);
  }
  await page.waitFor(800);
  await page.click(typesList[0].id);

  // setting Krasnoyarsk city
  await setCity(
    page,
    "#option_list_options_container_5_2",
    "#option_list_options_container_4_2"
  );

  // setting 'Future' to false
  await page.click("#future", 100);

  let totalEventIds = [];
  //
  for (let i = 40; i < typesList.length; i++) {
    await selectNewCategory(page, typesList[i].id);
    await page.waitFor(3000);
    await scrollToBot(page);
    const ids = await getAllIds(page);
    totalEventIds = [...totalEventIds, ...ids];
    // totalEventIds.push(...ids);

    saveToFile(
      {
        id: typesList[i].id,
        value: typesList[i].value,
        title: typesList[i].title,
        data: ids
      },
      `./data/${i}.json`
    );
  }

  // console.log(totalEventIds);
  console.log(totalEventIds.length);

  await browser.close();
})();

function saveToFile(data, filename) {
  fs.writeFile(
    filename,

    JSON.stringify(data),

    function(err) {
      if (err) {
        console.log(err);
      }
    }
  );
}

async function scrollToBot(
  page,
  scrollStep = 200,
  scrollDelay = 300,
  stop = false
) {
  const lastPosition = await page.evaluate(
    async (step, delay) => {
      const getScrollHeight = element => {
        const { scrollHeight, offsetHeight, clientHeight } = element;
        return Math.max(scrollHeight, offsetHeight, clientHeight);
      };

      const position = await new Promise(resolve => {
        let count = 0;
        const intervalId = setInterval(() => {
          const { body } = document;
          const availableScrollHeight = getScrollHeight(body);

          window.scrollBy(0, step);
          count += step;

          if (count >= availableScrollHeight) {
            clearInterval(intervalId);
            resolve(count);
          }
        }, delay);
      });

      return position;
    },
    scrollStep,
    scrollDelay
  );

  await page.waitFor(1000);
  if (!stop) {
    // await scrollToBot(page, 200, 300, true);
  }

  return lastPosition;
}
async function getAllIds(page) {
  const data = await page.evaluate(() => {
    const groups = document.querySelectorAll(".groups_row");
    return [].map.call(groups, gr => gr.dataset.id);
  });

  return data;
}
async function selectNewCategory(page, id) {
  await page.click("#dropdown3", 100);
  await page.waitFor(800);
  await page.click(id, 100);
  await page.waitFor(800);
}
async function setCity(page, countryId, cityId) {
  await page.waitFor(800);
  await page.click("#dropdown5", 100);
  await page.waitFor(800);
  await page.click(countryId, 100);
  await page.waitFor(800);
  await page.click("#dropdown4", 100);
  await page.waitFor(800);
  await page.click(cityId, 100);
  await page.waitFor(800);
}
