import React, { useState } from 'react';

import UploadButton from "../../components/admin/UploadButton";
import ConfigParser from "../../components/admin/ConfigParser";
import { getConfigs, setConfig } from '../../api/api';
import * as api from '../../consts/api';
import './style.scss';


function Admin() {

  const [filename, setFilename] = useState('');
  const [fields, setFields] = useState([]);

  const [configs, setConfigs] = useState([]);

  function uploadFile(event, url) {
    console.log(event.target.files)
    if (event.target.files.length) {
      setFilename(event.target.files[0].name);
      let file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function(e) {
          var text = reader.result;     
          var firstLine = text.split('\n').shift(); 
          setFields(firstLine.split(','))
      }

      reader.readAsText(file, 'UTF-8');
      if (file) {
        let data = new FormData();
        data.append('file', file);

        // axios.post(url, data);
      }
    }
  }

  function getUpdateConfigs() {
    return getConfigs().then(response => setConfigs(response.data));
  }

  function setUpdateConfigs(data) {
    return setConfig(data).then(() => getUpdateConfigs())
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
        <ConfigParser
          getConfigs={getUpdateConfigs}
          setConfig={setUpdateConfigs}
          filename={filename}
          fields={fields}
          names={configs}
        />
      </div>
    </div>
  );
}

export default Admin;
