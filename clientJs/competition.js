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

    const link = "/stories/story"
    const query1 = {t:'1498649778000',a:'rammohan',n:'dongadebba'}
    const linkObj1 = {
        pathname:link,
        query:query1
    }

    const query2 = {t:'1498649418000',a:'satyavathi',n:'mayaungaram'}
    const linkObj2 = {
        pathname:link,
        query:query2
    }

    const query3 = {t:'1498649066000',a:'luckysri',n:'samidha'}
    const linkObj3 = {
        pathname:link,
        query:query3
    }

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
              <Link to={linkObj1} className="authorClick">
                <div className="storyName">దొంగ దెబ్బ</div>
                <img className="coverImage" src="https://s3.ap-south-1.amazonaws.com/bsstory/rammohan/dongadebba/cover.jpg" />
              </Link>
              <div className="authorInfo">
                <img src="https://s3.ap-south-1.amazonaws.com/bsstory/rammohan/profile.jpg" className="winnerPhoto"/>
                <div className="authorDetails">
                  <div>Koilada Rammohan Rao</div>
                  <div>Prize money ₹15,000</div>
                  <Link to="/author/rammohan"><div className="authorClick">About author</div></Link>
                </div>
              </div>
            </div>
          </li>
          <li className="character">
            <div className="storyName award">రెండవ బహుమతి</div>
            <div className="storyDetails">
            <div className="storyName">ముత్యాల రాజు  - మాయా ఉంగరం</div>
           ఇంకో ఏడాది లో రాజు కావాల్సిన వాడు. మిగతా అన్ని విద్యలలో ఆరితెరినా కూడా తనకి చేతి బొటన వేలు లేని కారణంగా యుద్ధ విద్యలు నేర్చుకోలేకపోతాడు.
          </li>
          <li className="character">
           <span className="highlight">ఖైది: </span>20-32 సంవత్సరాల మధ్యలో ఉండే అతి ముఖ్యమైన యవ్వన దశ మొత్తం జైలులో గడిపిన 32 ఏళ్ళ యువకుడు. ఎంతో జాలి గుణం కలవాడు. ఒక మెకానిక్
            షెడ్ లో పనిచేస్తూ, సమాజం తనపై చూపించే వివక్షని సానుకూల దృక్పథంతో ఎదుర్కొంటూ, పోగొట్టుకున్న తన కుటుంబాన్ని తలచుకుంటూ జీవిస్తూ ఉంటాడు.
                <img src="https://s3.ap-south-1.amazonaws.com/bsstory/satyavathi/profile.jpg" className="winnerPhoto"/>
                <div>Author: Satyavathi Dinavahi</div>
                <div>Prize money: ₹7,000</div>
                <a href="https://www.sukatha.com/author/satyavathi">Details about Satyavathi Dinavahi</a>
          </li>
          <li className="character">
           <span className="highlight">రాజకీయ నాయకుడు: </span>లంచగొండి. కానీ బుర్ర తక్కువ వాడు. తన అబద్ధాలు పలు మార్లు
            బహిరంగంగానే తేటతెల్లం అయినా కూడా తన పధ్ధతిలోనే అవివేకంగా ఉంటూ ఉంటాడు.
                  <Link to="/author/satyavathi"><div className="authorClick">About author</div></Link>
                </div>
              </div>
           <span className="highlight">ఇద్దరు పిల్లలున్న ఒక గృహిణి: </span>తన స్నేహితులతో కలిసి ఒక బిజినెస్ లో డబ్బులు పెట్టుబడి పెట్టు అంత పోగొట్టుకుని కష్టాలలో పడుతుంది.
            <div className="storyName">సమిధ</div>
            <div className="storyDetails">
           <span className="highlight">స్కూల్ విద్యార్ధి: </span>తోటి విద్యార్థుల కన్నా చాలా తెలివైన వాడు/అమ్మాయి. ఎపుడూ ఏదో కొత్త విషయం తెలుసుకోవాలన్న ఆసక్తి.
          <li className="character">
           <span className="highlight">మిలిటరీ ఆఫీసర్: </span>32 ఏళ్ళు. ఇంకా పెళ్లి కాలేదు.
            సైన్యం లో ఫస్ట్ లెఫ్టనెంట్. కండబలం, బుద్ధిబలం, దూకుడు ఉన్న వ్యక్తి. ఆడవాళ్లన్నా, పాకిస్తాన్ అన్నా ద్వేషం. పిల్లలు, ప్రకృతి, పల్లెటూరు అంటే మహా ఇష్టం.
                <div>Prize money: ₹3,000</div>
          </li>
          <li className="character">
           <span className="highlight">M.B.B.S విద్యార్ధి: </span>తెలివితేటలు, పట్టుదల, డాక్టర్ అయ్యి వీలైనంతమంది ప్రాణాలు కాపాడాలి అన్న
            </div>
          </li>
        </ul>

        <div className="home"> <Link to="/">← Home</Link> </div>
      </div>
    );
  }
}

export default Competition;
