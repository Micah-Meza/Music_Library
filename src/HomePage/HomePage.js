import React, { useState } from 'react';
import axios from 'axios';

//Component Imports
import EditSong from './EditSong';


const HomePage = () => {
    const[songs, setSongData] = useState([])

    const getSongData = async () => {
        try {
            let response = await axios.put('http://127.0.0.1:8000/api/movie_list/' + songs.id);
            console.log("First call movie data.", response.data)
            setSongData(response.data)

        } catch (error) {
            console.log("Something broke", error.message)
            
        }
    }


    return ( 
        <>
        <h1>Welcome to the Home Page!</h1>
        <button onClick={getSongData}>Get My Data </button>

        <EditSong songs={songs}/>
        </>
    );
}
export default HomePage;