import React from "react";
import PropTypes from "prop-types";

const FilterLink = props => {
  if (props.filter === props.store.visibilityFilter) {
    return <span>{props.children}</span>;
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        props.actions.setVisibilityFilter(props.filter);
      }}
    >
      {props.children}
    </a>
  );
};

FilterLink.propTypes = {
  store: PropTypes.object,
  actions: PropTypes.object
};

export default FilterLink;
