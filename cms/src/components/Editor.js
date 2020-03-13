import React from 'react';
import PropTypes from 'prop-types';

const Editor = ({ item, onUpdate }) => {
  return (
    <div className="editor">
      <h2>Edit {item.name} ({item.id})</h2>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" defaultValue={item.name} onBlur={(e) => onUpdate(e.target.value)} />
    </div>
  );
};

Editor.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Editor;
