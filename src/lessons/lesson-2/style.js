import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './css/list.module.css';

//=======Стилизация=======

const arrLang = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'React' },
  { id: 3, name: 'HTML' },
  { id: 4, name: 'CSS' },
];

const BookLang = ({ book }) => {
  const styleForList = styles.list; // импорт модуля styleList.
  return (
    <div>
      <h1>Языки програмирования</h1>

      <ul className={styleForList}>
        {book.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};
const App = () => (
  <>
    <BookLang book={arrLang} />
  </>
);

// ReactDOM.render(<App />, document.getElementById("root"));

//-------Композиция-------

const Button = ({ type = 'button', disabled, label }) => {
  console.log(disabled);
  const style = disabled === 'true' ? [styles.disabled] : [styles.active];
  style.push(styles.button);
  console.log(style);
  return (
    <button className={style.join(' ')} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

ReactDOM.render(
  <Button disabled="false" label="отправить" />,
  document.getElementById('root'),
);
