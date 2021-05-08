import React, { useState, useContext } from 'react';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';
import Title from '../comps/Title';
import UploadForm from '../comps/UploadForm';
import { UserContext } from '../providers/UserProvider'
function ImageRepo() {
  const [selectedImg, setSelectedImg] = useState(null);
  const user = useContext(UserContext);
  return (
    <div className="ImageRepo">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  );
}

export default ImageRepo;
