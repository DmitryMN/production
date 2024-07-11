import React from 'react';
import { Article, ArticleList, ArticleTypes, ArticleBlockType } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}


const articlesMoc = {
  id: "1",
  title: "Javascript news",
  subtitle: "What's new in Javascript in 2023",
  user: {
    id: "1",
    username: "admin",
    avatar: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663671763_1-mykaleidoscope-ru-p-zloi-khaker-vkontakte-1.jpg"
  },
  img: "https://cdn.dribbble.com/users/2495677/screenshots/5039870/js-ninja-01.png",
  views: 100,
  createAt: "26.01.2023",
  type: [
    ArticleTypes.IT
  ],
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "Some title this block",
      paragraphs: [
        "Here, we are having an array of objects called inventory. And a myCallback function that is taking a quantity as a parameter and returning ok if the quantity is more than 5, or else returning restock."
      ]
    },
    {
      id: "2",
      type: ArticleBlockType.CODE,
      code: "<!DOCTYPE html>\n<html>\n    <body>\n    <p id=\"hello\"></p>\n\n    <script>\n document.getElementById('hello').innerHTML='Hello, world!';\n </script>\n</body>\n</html>"
    },
    {
      id: "3",
      type: ArticleBlockType.IMAGE,
      src: "https://sun9-65.userapi.com/c638729/v638729533/c036/f3B7DJ8Ep0o.jpg",
      title: "Picture 1 - image one"
    },
    {
      id: "4",
      type: ArticleBlockType.CODE,
      code: "const doSomething = () => {\n return ['Roger', 6] \n} \n const [ name, age ] = doSomething()\n console.log(name, age)"
    }
  ]
} as Article;

const ArticlesPage: React.FC<ArticlesPageProps> = ({ className }) => {
  return (
    <div className={classNames(style.articlesPage, {}, [className])}>
      <ArticleList articles={new Array(16).fill(0).map((item, index) => ({ ...articlesMoc, id: String(index) }))} />
    </div>
  );
};

export default ArticlesPage;
