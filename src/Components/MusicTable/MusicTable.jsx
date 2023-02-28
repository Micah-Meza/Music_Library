import axios from "axios";


const MusicTable = ({songs}) => {

    console.log("This is from MusicTable")
    console.log(songs)


    return (
        <>
        <table>
            <thead>
                <tr>
                  <th>Title</th>  
                  <th>Artist</th>  
                  <th>Album</th>  
                  <th>Genre</th>  
                  <th>Release</th>  
                  <th>Options</th>  
                </tr>
            </thead>
            <tbody>
                {songs.songs.map((song) => {
                    return (
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release}</td>
                            <div>
                                <td>{song.options}</td>
                            </div>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}

export default MusicTable;


/*
.filter((song) => 
                song.title.includes()
                )
*/