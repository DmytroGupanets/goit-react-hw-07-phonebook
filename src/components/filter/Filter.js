import React from "react";
import { connect } from "react-redux";
import { updateFilterValue } from "../../redux/filter/filterActions";

import styles from "./Filter.module.css";

const Filter = ({ updateFilterValue, filterValue }) => {
  const onHandleChange = (e) => {
    updateFilterValue(e.target.value);
  };

  return (
    <div className={styles.filterContiner}>
      <label className={styles.label}>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={onHandleChange}
        />
      </label>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  filterValue: state.contacts.filter,
});

export default connect(mapStateToProps, { updateFilterValue })(Filter);
