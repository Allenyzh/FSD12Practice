const { htmlToNode } = require("./telegraph");
const { getNews } = require("./mainFunction");

const main = async () => {
  const url =
    "https://www.lapresse.ca/actualites/grand-montreal/2024-07-24/ahuntsic-cartierville/incertitude-autour-d-un-projet-conteste-de-refuge-pour-sans-abri.php";

  const articleObject = await getNews(url);

  const finalContent = htmlToNode( articleObject.content );
  // console.log(finalContent);
  console.log(JSON.stringify(finalContent, null, 2));

  // console.log(
  //   `${articleObject.content}`
  // );
};

main();
