import React,{ useContext } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { UserContext } from "../providers/UserProvider";

const ImageGrid = ({setSelectedImg}) => {
    const {docs} = useFirestore('images');
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;
    const filteredDocs = docs.filter(function(doc) {
        return doc.email === email;
    });
    console.log(docs);
    return (
        <div className="img-grid">
            { docs && filteredDocs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}
export default ImageGrid;