import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label>
          Find contacts by name
          <input
            className={s.filterInput}
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
}
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
