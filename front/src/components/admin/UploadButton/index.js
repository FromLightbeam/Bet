import React from 'react';

import Button from '@material-ui/core/Button';


function UploadButton(props) {
  const { accept, onChange, label, inputId } = props;
  return (
    <div className='item'>
      <input
        id={inputId}
        style={{ display: 'none' }}
        type='file'
        accept={accept}
        onChange={onChange}
      />
      <label htmlFor={inputId}>
        <Button variant="contained" component="span">
          {label}
        </Button>
      </label>
    </div>
  );
}

export default UploadButton;