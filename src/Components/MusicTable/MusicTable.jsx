


const MusicTable = ({data}) => {
    return (

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
                {data.parentData.map((song) => {
                    return(
                        <tr>
                            <td>{song.title}</td>
                        </tr>
                    );
                })}



            </tbody>
        </table>



    );
}
 
export default MusicTable;


/*
.filter((song) => 
                song.title.includes()
                )
*/