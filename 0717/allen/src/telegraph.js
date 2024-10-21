const axios = require("axios");
const cheerio = require("cheerio");

const htmlToNode = (html) => {
  const $ = cheerio.load(html);
  // console.log($);
  const content = [];

  function convertElement(element) {
    const tag = element.tagName; //获取当前标签名称
    // console.log(tag);
    let children = $(element)
      .contents() //获取所有子节点
      .map((_, el) => convertElement(el)) // 递归传递每个子结点
      .get() // 转换为数组
      .filter((child) => child !== ""); // 过滤空字符
    
    // children.length ? console.log(children) : "";

    const text = $(element).text().trim();
    if (!tag) {
      return text || ""; // 如果是文本节点则返回文本本身或空
    }
    switch (tag) {
      case "p":
      case "h3":
      case "figcaption":
      case "figure":
      case "b":
      case "i":
      case "u":
      case "s":
      case "blockquote":
        return {
          tag,
          children: children.length ? children : text ? [text] : [],
        };
      case "img":
        return { tag: "img", attrs: { src: $(element).attr("src") } };
      case "a":
        return {
          tag: "a",
          attrs: { href: $(element).attr("href") },
          children: children.length ? children : text ? [text] : [],
        };
      default:
        return text || "";
    }
  }

  $("body")
    .contents()
    .each((_, element) => {
      const convertedElement = convertElement(element);
      if (convertedElement && convertedElement !== "") {
        content.push(convertedElement);
        // console.log(content);
      }
    });

  return content.filter((item) => item !== "");
};

module.exports = { htmlToNode };
