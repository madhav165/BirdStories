import React, { Component } from 'react';
import like from '../img/like.png';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');

class Share extends Component {

  constructor(props){
    super(props)
    this.likeClick = this.likeClick.bind(this);
    this.shareClick = this.shareClick.bind(this);
  }

  likeClick(){
    this.props.updateSocial('likes');
  }
  shareClick(){
    this.props.updateSocial('shares');
  }
  render(){
    const shareUrl = this.props.shareUrl;
    const title = this.props.title;
    const pic = this.props.pic;
    var size = 36;

    if(this.props.size){
      size = this.props.size

    }
    var imgSrc = "/img/like.png"
    var likeStyle = {
      width:size+'px',
      height:size+'px',
      background: 'url(' + like + ') no-repeat center',
      backgroundSize:'cover'
    }
    return (
      <ul className="share">

        <li onClick={this.shareClick} >
          <FacebookShareButton
            url={shareUrl}
            title={title}
            picture={pic}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={size}
              round />
          </FacebookShareButton>
        </li>

        <li onClick={this.shareClick}>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={size}
              round />
          </TwitterShareButton>
        </li>

        <li onClick={this.shareClick}>
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={size}
              round />
          </GooglePlusShareButton>
        </li>
        <li onClick={this.likeClick} ><div style={likeStyle} ></div></li>
      </ul>
    );
  }

}

export default Share;
