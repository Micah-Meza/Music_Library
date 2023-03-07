import React, { useState } from 'react';
import './CreateSong.css'

const CreateSong = ({newSong}) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [release_date, setRelease_Date] = useState()
    const [genre, setGenre] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault();
        let addNewSong ={
            title : title,
            artist : artist,
            album : album,
            release_date : release_date,
            genre : genre,
        }
        newSong(addNewSong)
    }    


    return (
     /*   <div>
        <button>Add New Song</button>
        </div>
        */
        <div className='text_label' >
        <form onSubmit={handleSubmit}>
            <label >
                Title <input type='text' value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                Artist <input type='text' value={artist} placeholder='Artist' onChange={(e) => setArtist(e.target.value)}/>
                Album <input type='text' value={album} placeholder='Album' onChange={(e) => setAlbum(e.target.value)}/>
                Release Date <input type='date' value={release_date} placeholder='Release Date' onChange={(e) => setRelease_Date(e.target.value)}/>
                Genre <input type='text' value={genre} placeholder='Genre' onChange={(e) => setGenre(e.target.value)}/>
            </label>
            <input className='input_button' type='submit' value='Sumbit' />
        </form>
        </div>
        
    );
} 
 
export default CreateSong;