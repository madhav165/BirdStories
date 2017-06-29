import React, { Component } from 'react';
import SA from './util/analytics';
import Styles from './css/competition.css';
import { Link } from 'react-router';

class Competition extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = window.getString("Competition") + " - "+window.getString("companyPromo");
    SA.sendPageView('competition');

    window.onbeforeunload = () => {
        SA.sendEvent('Competition','close','competition');
      }
  }

  componentWillUnmount(){
    SA.sendEvent('Competition','close','competition');
    window.onbeforeunload = undefined;
  }


  render() {
    return (
      <div className="competition">
        <div className="pageHeader">
          <div className="topLeftTitle">సు’కథ’ నిర్వహణలో..</div>
          <div className="topRightTitle">కథల పోటీ..</div>
          <div className="mainTitle">పాత్రకి జీవం పోయండి </div>
        </div>
        <div className="addressInfo">మా ఈ నూతన ప్రయోగాన్ని విజయవంతం చేసిన రచయితలకి మనఃపూర్వక ధన్యవాదాలు మరియు విజేతలకు మా అభినందనలు.</div>

        <ul className="characters">
          <li className="character">
            <div className="storyName">మొదటి బహుమతి</div>
            <div className="storyName">దొంగ దెబ్బ</div>
            <div className="storyDetails">
              <div><img className="coverImage" src="https://s3.ap-south-1.amazonaws.com/bsstory/rammohan/dongadebba/cover.jpg" /></div>
              <div className="authorInfo">
                <img src="https://s3.ap-south-1.amazonaws.com/bsstory/rammohan/profile.jpg" className="winnerPhoto"/>
                <div>Author: Koilada Rammohan Rao</div>
                <div>Prize money: ₹15,000</div>
                <a href="https://www.sukatha.com/author/rammohan">Details about Koilada Rammohan Rao</a>
              </div>
            </div>
          </li>
          <li className="character">
            <div className="storyName">రెండవ బహుమతి</div>
            <div className="storyName">ముత్యాల రాజు  - మాయా ఉంగరం</div>
            <div className="storyDetails">
              <div><img className="coverImage" src="https://s3.ap-south-1.amazonaws.com/bsstory/satyavathi/mayaungaram/cover.jpg"/></div>
              <div className="authorInfo">
                <img src="https://s3.ap-south-1.amazonaws.com/bsstory/satyavathi/profile.jpg" className="winnerPhoto"/>
                <div>Author: Satyavathi Dinavahi</div>
                <div>Prize money: ₹7,000</div>
                <a href="https://www.sukatha.com/author/satyavathi">Details about Satyavathi Dinavahi</a>
              </div>
            </div>
          </li>
          <li className="character">
            <div className="storyName">మూడవ బహుమతి</div>
            <div className="storyName">సమిధ</div>
            <div className="storyDetails">
              <div><img className="coverImage" src="https://s3.ap-south-1.amazonaws.com/bsstory/luckysri/samidha/cover.jpg"/></div>
              <div className="authorInfo">
                <div><img src="https://s3.ap-south-1.amazonaws.com/bsstory/luckysri/profile.jpg" className="winnerPhoto"/></div>
                <div>Author: Srinivasa Raju Uppalapati</div>
                <div>Prize money: ₹3,000</div>
                <a href="https://www.sukatha.com/author/luckysri">Details about Srinivasa Raju Uppalapati</a>
              </div>
            </div>
          </li>
        </ul>

        <div className="home"> <Link to="/">← Home</Link> </div>
      </div>
    );
  }
}

export default Competition;
