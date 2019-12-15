import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ item, onUpdate }) => {
  return (
    <div className="editor">
      <h2>Edit {item.name} ({item.id})</h2>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={(e) => onUpdate(e.target.value)} />
    </div>
  );
};

Menu.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Editor;
