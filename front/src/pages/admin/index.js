import React from 'react';
import axios from 'axios';

import UploadButton from "../../components/admin/UploadButton";
import ConfigParser from "../../components/admin/ConfigParser";
import * as api from "../../consts/api";
import './style.scss';


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
    <div className='content admin-content'>
      <div className='admin-content__uploads'>
        <UploadButton
          inputId='json-metric'
          accept='.JSON'
          onChange={e => uploadFile(e, api.METRIC_CSV)}
          label='Upload JSON Metric'
        />
        <UploadButton
          inputId='matches-csv'
          accept='.csv'
          onChange={e => uploadFile(e, api.BULK_MACTH)}
          label='Upload matches CSV'
        />
      </div>
      <div className='item admin-content__config'>
        <ConfigParser />
      </div>
    </div>
  );
}

export default Admin