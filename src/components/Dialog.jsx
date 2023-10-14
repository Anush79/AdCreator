import React, { useState } from 'react';

function CustomDialog({ isOpen, onClose }) {
  return (
    <div className={`custom-dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-content">
        <h2>Custom Dialog</h2>
        <p>This is a custom dialog box.</p>
        <button className="primaryButton"onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CustomDialog;
