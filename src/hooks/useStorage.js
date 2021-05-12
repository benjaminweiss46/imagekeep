import {useState,useEffect,useContext} from 'react';
import {projectStorage,projectFirestore,timestamp} from '../firebase/config';
import { UserContext } from "../providers/UserProvider";
const useStorage = (file) => {
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => { //input -> function,dependencies
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        
        storageRef.put(file).on('state_changed', (snap) => { //async -> attach listener
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt, email });
            setUrl(url);
        }); 
    }, [file]);
    
    return { progress, url, error }
}

export default useStorage;