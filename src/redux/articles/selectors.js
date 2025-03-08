import { createSelector } from "@reduxjs/toolkit";
export const selectArticles = (state) => state.articles.articlesList;
export const selectValue = (state) => state.articles.value;

export const selectFoundArticles = createSelector(
  [selectArticles, selectValue],
  (articles, value) => {
    console.log(articles, value);
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(value.toLowerCase()) ||
        article.description.toLowerCase().includes(value.toLowerCase())
    );
  }
);
