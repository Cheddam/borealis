import React from 'react';
import PropTypes from 'prop-types';

const List = ({ title, items, onSelect }) => {
  return (
    
    <div className="list">
      <h3>{title}</h3>
      <ul>
        {items.map(({ id, name }) => <li key={id} onClick={() => onSelect(id)}>{name}</li>)}
      </ul>
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default List;
