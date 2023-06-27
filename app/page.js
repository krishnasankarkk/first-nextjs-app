import React from 'react';

function Post() {
  return (
  <main>
    <div className='post-header'>
      <img className='profile-image'
        src='https://via.placeholder.com/50x50'
        alt='Profile'>
      </img>
      <div className='username'>
        Username
      </div>
    </div>
  </main>
  );
}

export default Post;