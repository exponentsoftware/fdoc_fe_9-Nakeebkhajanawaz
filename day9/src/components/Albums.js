import React, { useState } from 'react'
// import Album from './Album';
import '../App.css';

function Albums(props) {
    const [searchTerm, setSearchTerm] = useState("")
    // render() {
        return (
            <div>
            <div className="searchForm">
                <form>
                    <label>Search: </label>
                    <input
                    type = "text"
                    placeholder="Artist, or album title"
                    // value={this.state.data}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                    />
                    {props.albums.filter( val=> {
                        if(searchTerm === ""){
                            return val
                        }else if (val.artist.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }else if (val.album_title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map(val => {
                        return (
                            <div className="user">
                                <p>{val.artist} || {val.album_title}</p>
                            </div>
                        )
                    })}
                    </form>
                    </div>


            <div className = "three-cards">
                {/* pass array directly from app */}
                {/* instead of albums I need to pass deleteFunc from App but I am unable to do */}
                {props.albums.map(album => {
                return (
                    // key={band.id}
                    
                <ul>
                    <img alt="example" src={album.img} width="300" height="380" />
                    <li key="{album}">{album.id}</li>
                    <li>{album.artist}</li>
                    <li>{album.album_title}</li>
                    <li>{album.album_cover}</li>


                    </ul>)
            })}

               
            </div>
            </div>
        )
    
}

export default Albums