import React, { Component } from 'react';
import './DropMenu.css';

class DropMenu extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="dropmenu">
        <button
          className="dropmenu__button"
          type="button"
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>
        {visible && (
          <div className="dropmenu__menu">
            <ul className="dropmenu__list">
              <li>Строка 1</li>
              <li>Строка 2</li>
              <li>Строка 3</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default DropMenu;
