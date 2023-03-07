/*

(5 points) As a developer, I want to have an aesthetically pleasing user interface
to ensure a great user experience.

(10 points) As a music enthusiast, I want to be able to filter the table of music by
album, artist, genre, release date, and title.


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
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import EditSong from './HomePage/EditSong';
//import EditSong from './Components/EditSong/EditSong';
//import DeleteSong from './Components/DeleteSong/DeleteSong';

function App() {
  const [songs, setSongs] = useState() 
  let [newSong, setNewSong] = useState(songs)
  const [editSong, setEditSong] = useState()
  const [deleteSong, setDeleteSong] = useState()
  

  useEffect(() => {
    getAllSongs();
  
  }, [])
  

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
  
  }

  async function createSong(newSongEntry){
    let response = await axios.get('http://127.0.0.1:8000/api/music/', newSongEntry)
    newSong = [newSongEntry,...songs]
    setNewSong(newSong)
    if(response.status === 201){
      
      await getAllSongs();
    } else {

    }
  }

  async function editSongInfo(){
    const response = await axios.put(`http://127.0.0.1:8000/api/music/`+ songs.id);
    setEditSong(editSong)
    console.log(response.data)
    console.log(songs.id)
  }
 
  async function updatePost() {
    const response = await fetch(`http://127.0.0.1:8000/api/music/${songs.id}/`);
        const data = await response.json();
        setEditSong(songs.id);
    }


  return (
    <div className ='background_image'>
      <div> 
        <SearchBar />
        <MusicTable songs = {songs} /> 
        <CreateSong newSong = {createSong} />    

         

        
      </div>
    </div>
  );
}

export default App;
