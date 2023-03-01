import React, { useState } from 'react';


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
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Title <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                Artist <input type='text' value={artist} onChange={(e) => setArtist(e.target.value)}/>
                Album <input type='text' value={album} onChange={(e) => setAlbum(e.target.value)}/>
                Release Date <input type='date' value={release_date} onChange={(e) => setRelease_Date(e.target.value)}/>
                Genre <input type='text' value={genre} onChange={(e) => setGenre(e.target.value)}/>
            </label>
            <input type='submit' value='Sumbit' />
        </form>
        </div>
        
    );
} 
 
export default CreateSong;