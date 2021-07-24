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

// ReactDOM.render(container, document.getElementById("root"));

//-------Компоненты-------
const pictureUrl = 'https://images.pexels.com/photos/8704785/pexels-photo-8704785.jpeg?cs=srgb&dl=pexels-daria-ponomareva-8704785.jpg&fm=jpg'

const App =()=>(
  <div>
    <Product name ='На отдых в Турцию' text = 'Лететь всего 3.5 часа. Теплое море' imgUrl={pictureUrl}/>
  </div>
);


const Product = props =>(
<div>
  <img src={props.imgUrl} width ='400'/>
  <h2>{props.name}</h2>
  <p>{props.text}</p>
</div>
);



// ReactDOM.render(<App/>, document.getElementById("root"))



//-------props.children-------


const Profile =({name, email})=>(
  <div>
      <p>name:{name}</p>
      <p>email:{email}</p>
  </div>
);



const Panel =({title, children})=>(
  <div>
    <h2>{title}</h2>
      {children}
  </div>
);

const App2=()=>(
  <>
  <Panel title='Пользователь:'>
    <Profile name='Ilfat' email='ialiev685@gmail.com'/>
  </Panel>
  </>
);

// ReactDOM.render(<App2/>, document.getElementById("root"))

//-------Свойство defaultProps-------






const Item = ({imgUrl, name, text }) =>(
<div>
  <img src={imgUrl} width ='400'/>
  <h2>{name}</h2>
  <p>{text}</p>
</div>
);


Item.defaultProps = {
  imgUrl: 'https://images.pexels.com/photos/8829906/pexels-photo-8829906.jpeg?cs=srgb&dl=pexels-kira-schwarz-8829906.jpg&fm=jpg',
};


const App4 =()=>(
  <div>
    <Product name ='На отдых в Турцию' text = 'Лететь всего 3.5 часа. Теплое море' />
  </div>
);


ReactDOM.render(<App4/>, document.getElementById("root"))


//-------propTypes-------

//npm install --save-dev prop-types

// Product.propTypes = {
//   imgUrl: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };