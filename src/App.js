/*

(10 points) As a developer, I want to use AXIOS to consume the Django REST API
on the frontend.

(10 points) As a developer, I want to display the data (song title, album, artist,
genre, and release date) from the API within a table on the frontend.


(5 points) As a developer, I want to have an aesthetically pleasing user interface
to ensure a great user experience.

(10 points) As a music enthusiast, I want to be able to filter the table of music by
album, artist, genre, release date, and title.

(10 points) As a music enthusiast, I want to be able to add a song to my database
by using Axios to make a POST request to the Django REST API
Bonus

(10 points) As a music enthusiast, I want to be able to update the song data in my
table using a modal popup window that initiates a PUT request to the Django
REST API

(5 points) As a music enthusiast, I want to be able to delete a song from my table,
initiating a DELETE request to my Django REST API

**************************************************************************************************************************************************/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import CreateSong from './Components/CreateSong/CreateSong';

function App() {
  const [songs, setSongs] = useState() 
  let [newSong, setNewSong] = useState(songs)

  useEffect(() => {
    getAllSongs();
  
  }, [])
  

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data, 'Testing @ Get All' )
    setSongs(response.data)
  
  }

  async function createSong(newSongEntry){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSongEntry)
    newSong = [newSongEntry,...songs]
    setNewSong(newSong)
    if(response.status === 201){
      
      await getAllSongs();
    } else {

    }
  }




  return (
    <div>
      <div>
        <SearchBar />
        <MusicTable songs ={songs} />
        <CreateSong newSong={createSong} />     
      </div>
    </div>
  );
}

export default App;
