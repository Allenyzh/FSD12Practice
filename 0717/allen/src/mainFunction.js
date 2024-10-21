const axios = require("axios");
const cheerio = require("cheerio");

const getNews = async (url) => {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const title = $("h1.headlines.titleModule .title.titleModule__main")
    .text()
    .trim();
  const summary = $("div.articleBody .lead.textModule.textModule--type-lead")
    .text()
    .trim();
  const mainParagraph = $(
    "div.articleBody .paragraph.textModule.textModule--type-paragraph"
  )
    .text()
    .trim();

  const pre = $(
    "p.paragraph.textModule.textModule--type-paragraph,figure[itemscope][itemprop='associatedMedia']"
  ).clone();
  // pre.find("source").remove();
  pre.find("picture").each(function () {
    const img = $(this).find("img");
    $(this).replaceWith(img);
  });
  const content = $.html(pre);

  // Test purpose
  // const preCaptions = $("figcaption[itemprop='caption']").clone();
  // const captions = $.html(preCaptions);

  return { title, summary, mainParagraph, content };
};

module.exports = { getNews };
