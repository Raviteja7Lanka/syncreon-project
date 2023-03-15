import React from 'react';
import { useState } from 'react';
import './App.css'
import { Button, Form } from 'react-bootstrap';

const Upload = () => {

  const [selectedFile, setSelectedFile] = useState(null);


  const onFilePicked = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const fileToUpload = files[0];
      if (fileToUpload.name.endsWith('.xml')) {
        setSelectedFile(fileToUpload)
      } else {
        setSelectedFile(null)
        window.alert('File is not an XML')
        window.location.reload()
      }
    }
  }

  const uploadToDb = () => {
    if (selectedFile !== null) {
      var reader = new FileReader();
      reader.readAsText(selectedFile, "UTF-8");
      reader.onload = (e) => {
        const fileStr = e.target.result;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/xml");

        fetch("http://localhost:4000/api/upload", {
          method: 'POST',
          headers: myHeaders,
          body: fileStr,
          redirect: 'follow'
        })
          .then(response => {response.text();
                            window.location.reload();})
          .then(result => {
                            console.log(result);
                          })
          .catch(error => console.log('error', error));
      }

      reader.onerror = () => {
        window.alert('An error occurred')
      }
    }
  }

  return <div>
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>Upload an XML file</Form.Label>
      <Form.Control type="file" onChange={onFilePicked} />
    </Form.Group>
    <Button className='btn btn-primary' onClick={uploadToDb}>Upload</Button>
  </div>

}

export default Upload;