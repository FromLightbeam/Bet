import React from 'react';
import axios from 'axios';

import * as api from "../consts/api";

function Admin() {
  function uploadFileMatch(event) {
    let file = event.target.files[0];
    console.log(file);

    if (file) {
      let data = new FormData();
      data.append('file', file);

      axios.post(
        api.MATCH_CSV, data
      );
    }
  }

  function uploadFileMetric(event) {
    let file = event.target.files[0];
    console.log(file);

    if (file) {
      let data = new FormData();
      data.append('file', file);

      axios.post(
        api.METRIC_CSV, data
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
          onChange={uploadFileMatch}
        />
      </div>
      <div className='item'>
        <label>Upload JSON Metric</label>
        <input
          type='file'
          id='file'
          accept='.JSON'
          onChange={uploadFileMetric}
        />
        {/* <button onClick={uploadFileMatch}>Reload</button> */}
      </div>
      <div className='item'>
        <label>Upload JSON (understat)</label>
        <input
          type='file'
          id='file'
          accept='.json'
          onChange={() => { }}
        />
      </div>
    </div>
  );
}

export default Admin