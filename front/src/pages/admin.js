import React from 'react';
import axios from 'axios';

import * as api from "../consts/api";

function Admin() {
  function uploadFile(event, url) {
    let file = event.target.files[0];
    if (file) {
      let data = new FormData();
      data.append('file', file);

      axios.post(
        url, data
      );
    }
  }

  return (
    <div className='content'>
      <div className='item'>
        <label>Upload CSV Match</label>
        <input
          type='file'
          id='file'
          accept='.csv'
          onChange={e => uploadFile(e, api.MATCH_CSV)}
        />
      </div>
      <div className='item'>
        <label>Upload JSON Metric</label>
        <input
          type='file'
          id='file'
          accept='.JSON'
          onChange={e => uploadFile(e, api.METRIC_CSV)}
        />
        {/* <button onClick={uploadFileMatch}>Reload</button> */}
      </div>
      <div className='item'>
        <label>Upload JSON (understat)</label>
        <input
          type='file'
          id='file'
          accept='.json'
          onChange={e => uploadFile(e, api.MATCH_JSON)}
        />
      </div>
      <div className='item'>
        <label>Upload all matches CSV (understat)</label>
        <input
          type='file'
          id='file'
          accept='.csv'
          onChange={e => uploadFile(e, api.BULK_MACTH)}
        />
      </div>
    </div>
  );
}

export default Admin