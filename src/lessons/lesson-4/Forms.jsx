import { Component } from 'react';
import shortid from 'shortid';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.loginId = shortid.generate();
  }

  onChangeInput = ({ target }) => {
    const { name, value, type, checked } = target;

    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { login, email, password, agreed, gender, age } = this.state;
    console.log(`
      Login: ${login}
      Email: ${email}
      Password: ${password}
      Agreed: ${agreed}
      gender: ${gender}
      age: ${age}
    `);

    // Проп который передается форме для вызова при сабмите

    // this.props.onSubmit({ ...this.state });
    // this.reset();
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor={this.loginId}>Name</label>
        <input
          id={this.loginId}
          type="text"
          placeholder="Enter login"
          name="login"
          value={login}
          onChange={this.onChangeInput}
        />
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.onChangeInput}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.onChangeInput}
          />
        </label>
        <label>
          Agree to terms
          <input
            name="agreed"
            type="checkbox"
            checked={agreed}
            onChange={this.onChangeInput}
          />
        </label>
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.onChangeInput}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.onChangeInput}
            />
          </label>
        </section>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.onChangeInput}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

export default Form;
