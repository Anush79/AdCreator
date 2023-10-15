import React, { useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function CustomDialog({ isOpen, onClose, setOpenForm }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose()
      setOpenForm(false);
    }, 600)
    return function () {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={`custom-dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-content">
        <span role='icon'><CheckCircleIcon fontSize='large'/></span>
        <span>Submitted</span>
      </div>
    </div>
  );
}

export default CustomDialog;
