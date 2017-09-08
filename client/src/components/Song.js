import React from 'react';

const Song = ({ id, title, updateSong, deleteSong }) => (
  <li> 
  <div style="">
    {title}
  </div>
  <div style={ styles.pointer } className="col m1" onClick={() => deleteSong(id)}>
  X
  </div>
  </li>   
)

// <Grid.Row columns={3}>
// <Grid.Column>
//   <Image src='/assets/images/wireframe/paragraph.png' />
// </Grid.Column>
// <Grid.Column>
//   <Image src='/assets/images/wireframe/paragraph.png' />
// </Grid.Column>
// <Grid.Column>
//   <Image src='/assets/images/wireframe/paragraph.png' />
// </Grid.Column>
// </Grid.Row>
// </Grid>

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

export default Song;