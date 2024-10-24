const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.lapresse.ca/actualites/2024-07-16/programme-cycliste-averti/quand-l-ecole-fait-pedaler-les-jeunes.php"
const fetchContent = async () => {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const title = $("h1.headlines.titleModule .title.titleModule__main").text();
  const summary = $(
    "div.articleBody .lead.textModule.textModule--type-lead"
  ).text();
  const preContent = $(
    "p.paragraph.textModule.textModule--type-paragraph,figure[itemscope][itemprop='associatedMedia']"
  ).clone();

  preContent.find("source").remove();
  // move <img> to <figure> and remove <picture>
  preContent.find("picture").each(function () {
    const img = $(this).find("img");
    $(this).replaceWith(img);
  });
  const content = $.html(preContent);
  
  return { title, summary, content };
};



module.exports = { fetchContent };
