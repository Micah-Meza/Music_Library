


const MusicTable = ({songs}) => {


    return (
        <>
        <table>
            <thead>
                <tr>
                  <th>Title</th>  
                  <th>Artist</th>  
                  <th>Album</th>  
                  <th>Genre</th>  
                  <th>Release Date</th>  
                  <th>Options</th>  
                </tr>
            </thead>
            <tbody>
                {songs && songs.map((song) => {
                    return (
                        <tr key = {song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.options}</td>
                            
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