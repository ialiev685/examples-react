import { Component } from 'react';
import './ColorPicker.scss';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: '',
    };
  }

  setActiveindex = index => {
    this.setState({ activeButton: index });
  };

  makeOptionClassName = index => {
    const optionClass = ['color-picker__button'];
    if (index === this.state.activeButton)
      optionClass.push('color-picker__button--active');
    return optionClass.join(' ');
  };

  render() {
    const data = this.props.data;

    return (
      <div className="color-picker">
        <h1 className="color-picker__title">Выбери цвет</h1>
        <ul className="color-picker__list">
          {data.map(({ id, color }, index) => (
            <button
              key={id}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveindex(index)}
            ></button>
          ))}
        </ul>
      </div>
    );
  }
}

export default ColorPicker;
