import React from 'react';
import axios from 'axios';

import * as api from "../consts/api";

function Admin() {
  function uploadFile(event) {
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

  return (
    <div className="App">
      <div>
        <label>Upload CSV</label>
        <input
          type='file'
          id='file'
          accept='.csv'
          onChange={uploadFile}
        />
      </div>
      <div>
        <label>Upload JSON</label>
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