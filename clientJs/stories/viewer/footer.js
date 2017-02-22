'use strict';
import React from 'react';
import styles from '../../css/footer.css';
import Social from '../../util/social.js';
import { Link } from 'react-router';

const View = ({story,authorLink, updateSocial})=>{
  var shareUrl = window.location.href;
  var title = story.displayName + " - "+"sukatha.com"
  var name = story.name.replace(/\s+/g, '').toLowerCase();
  const coverImg = "https://s3.ap-south-1.amazonaws.com/bsstory/"+story.author+"/"+name+"/cover.jpg"

  return(
    <div className="contentFooter" >
      <div className="authTitle">
        <Link to={authorLink}>More from {story.authorDisplayName}</Link>
      </div>
      <Social shareUrl={shareUrl} title={title} pic={coverImg} updateSocial={updateSocial}/>
    </div>
  )
}

export default View;
