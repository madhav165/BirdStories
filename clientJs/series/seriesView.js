'use strict';

import React,{Component} from 'react';
import  SeriesItem from './seriesItemView';
import styles from '../css/series.css';
import Loader from '../util/loading';

var timeoutSeries;

class View extends Component {
  constructor(props){
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight * 0.92 && !this.props.reachedEnd) {
      clearTimeout(timeoutSeries);
      var that = this;
      timeoutSeries = setTimeout(function(){
          that.props.showMoreSeries();
      },600);
    }
  }

  componentWillUnmount(){
      window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidMount(){
      window.addEventListener("scroll", this.handleScroll);
  }

  render(){
    var seriesDivs = '';
    if(this.props.seriesList){
      seriesDivs = this.props.seriesList.map(function(series,i) {
        return <SeriesItem series={series} key={i} />;
      })
    }

    var loaderDiv = ''
    if(!this.props.reachedEnd){
       loaderDiv = <Loader />
    }

    return (
      <div className="series">
        {seriesDivs}
      </div>
    )
  }

}


export default View;
