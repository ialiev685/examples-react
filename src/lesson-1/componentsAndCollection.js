import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// react формат создания эелемента
const link = React.createElement(
  "a",
  { href: "https://yandex.ru", target: "_blank", rel: "noreferrer noopener" },
  "ссылка на yandex"
);
const title = React.createElement("h2", null, "Нажмите на ссылку");

//  jsx формат создания эелемента
const imageUrl =
  "https://images.pexels.com/photos/7240389/pexels-photo-7240389.jpeg?cs=srgb&dl=pexels-john-lee-7240389.jpg&fm=jpg";
const image = <img src={imageUrl} width="400" />;

// образрный фрагмент, при рендере раствориться

const nextPost = (
  <Fragment>
    <h2>Следующий заголовок</h2>
    <p>статья...</p>
  </Fragment>
);

const container = React.createElement(
  "div",
  null,
  title,
  image,
  link,
  nextPost
);

ReactDOM.render(container, document.getElementById("root"));

//-------Компоненты-------
