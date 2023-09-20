import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 8,
    category : 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(){
    super();
    console.log('i Am constructor');
    this.state = {

      
      articles : [],
      loading : false,
	    page: 1
    }
  }

  async updatePage(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5549b4223c5842d993e830a4d910b30c&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
	  let data = await fetch(url);
	  let parsedData = await data.json()
    this.setState({
      articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount(){
	this.updatePage();

  }

  handlePrevious = async () => {
    this.setState({page: this.state.page - 1});
    this.updatePage();
  }
  handleNext = async () => {

	if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/16))){
		this.setState({page: this.state.page + 1});
    this.updatePage();
	}
  }

  render() {
    return (
      <div className="container my-3 display-flex">
        <h1 className="text-center my-3">NewsDonkey - Top headlines</h1>
        {this.state.loading && <Spinner/>}
       <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{ 
         return <div className="col-md-4" key={element.url}>
            <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl = {element.urlToImage} url = {element.url} author = {element.author} date = {element.publishedAt}/>
          </div>
        })}
        </div>
		<div className="container d-flex justify-content-between">
			<button disabled = {this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
			<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/16)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
		</div>
      </div>
    );
  }
}

export default News;
