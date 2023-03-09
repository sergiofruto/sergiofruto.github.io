let activeIndex = 0;
const articles = document.getElementsByClassName("main-article");

const handleLeftClick = (e) => {
  // increase active index
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : articles.length - 1;
  const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);

  console.log(nextIndex, currentArticle, nextArticle);
  //active article becomes after
  currentArticle.dataset.status = "after";
  //next article becomes active
  nextArticle.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextArticle.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = (e) => {
  // increase active index
  const nextIndex = activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 : 0;
  const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);

  console.log(nextIndex, currentArticle, nextArticle);
  currentArticle.dataset.status = "before";
  nextArticle.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextArticle.dataset.status = "active";
    activeIndex = nextIndex;
  });
}