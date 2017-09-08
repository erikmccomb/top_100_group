import React from 'react';

const Song = ({ id, title, updateSong, deleteSong }) => (
  <li> 
    <div style="">
      {title}
    </div>
    <div style={ styles.pointer } className="" onClick={() => deleteSong(id)}>
    X
    </div>
  </li>   
)

const styles = {
  pointer: { cursor: 'pointer' }
}

export default Song;