import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './MusicTable.css'



const MusicTable = ({songs}) => {
    const [search, setSearch] = useState('')


    return (
      <>
      <div className='filter_style'>
        <input type='text' value = {search} placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>
        <button><span>🔎</span></button>
      </div>
        <div className='table_container'>
        <Table striped bordered hover>
            <thead >
                <tr>
                  <th>Title</th>  
                  <th>Artist</th>  
                  <th>Album</th>  
                  <th>Genre</th>  
                  <th>Release Date</th>  
                  <th>Options</th>  
                </tr>
            </thead>
            <tbody className='head_container'>
                {songs && songs.filter((song) =>
                song.title.includes(search) ||
                song.artist.includes(search) ||
                song.album.includes(search) ||
                song.genre.includes(search) ||
                song.release_date.includes(search)
                
                )
                .map((song) => {
                    return (
                      
                        <tr key = {song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.options}
                                <button className='button_style_one' >Edit Info</button>
                                <button className='button_style_two'>Delete</button></td>
                            
                        </tr>
                        

                        
                    );
                })}
            </tbody>
        </Table>
        </div>
        </>
    );
}

export default MusicTable;


/*
.filter((song) => 
                song.title.includes()
                )
*/