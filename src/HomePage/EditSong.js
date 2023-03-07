/* import React, { useState } from 'react';


const EditSong = ({editSong}) => {
    const [edits, setEdits] =useState()
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [release_date, setRelease_Date] = useState()
    const [genre, setGenre] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let songId ={
            title : title,
            artist : artist,
            album : album,
            release_date : release_date,
            genre : genre,
        }
        editSong(songId)
    }    


    return (
       <button>Edit Info</button>
    );
}
 
export default EditSong;

*/

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditSong = () => {
    const {id}= useParams()
    const [song, setSongData] = useState([])

    const getInfo = async () => {
        try {
            let response = await axios.put(`http://127.0.0.1:8000/api/movie_list/${id}/`);
            console.log("Second call movie data details.", response.data)
            setSongData(response.data)

        } catch (error) {
            console.log("Something broke", error.message)
        }
    }
    
    useEffect(() => {
        getInfo()
    }, []);

    return ( 
        <div>
              
        </div>
     );
}
 
export default EditSong;