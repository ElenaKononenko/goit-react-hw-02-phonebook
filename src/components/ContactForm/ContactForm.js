import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    const { handleInputChange, handleSubmit } = this;

    return (
      <form className={s.ContactForm} action="" onSubmit={handleSubmit}>
        <label className={s.formLabel} name="name" htmlFor="">
          Name
          <input
            className={s.formInput}
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={handleInputChange}
          />
        </label>
        <label className={s.formLabel} name="number" htmlFor="">
          Number
          <input
            className={s.formInput}
            name="number"
            type="tel"
            placeholder="000-00-00"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
