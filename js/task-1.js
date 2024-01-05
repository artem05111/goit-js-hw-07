const categoriesList = document.querySelector("#categories");
const categoriesItems = [...categoriesList.children];
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryEl = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryEl}`);
});
