import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setfile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png','image/jpeg'];
    const changeHandler = (e) => {
        let selected = e.target.file[0]; //can change to get multiple later
        if (selected && types.includes(selected.type)) {
            setfile(selected);
            setError('');
        } else {
            setfile(null);
            setError('Please select a png or jpeg image');
        }
    }
    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
            <div className="output">
                { error && <div className="error">{error}</div> }
                { file && <div>{file.name}</div> }
                { file && <ProgressBar file={ file } setFile={ setfile }/>}
            </div>
        </form>
    )
}
export default UploadForm;