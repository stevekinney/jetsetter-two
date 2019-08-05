import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('itemList')

class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    const { value } =  event.target;
    this.setState({ value });
};

  handleSubmit = event => {
    const { value } = this.state;
    const { itemList } = this.props;

    event.preventDefault();

    itemList.addItem(value);
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
