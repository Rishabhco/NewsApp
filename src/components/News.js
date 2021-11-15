import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "business"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            totalResults: 0,
            loading: true,
            page: 1,
        };
    }
    async updatenews() {
        this.props.changeProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        this.props.changeProgress(30);
        let parsedData = await data.json();
        this.props.changeProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        this.props.changeProgress(100)
    }
    async componentDidMount() {
        this.updatenews();
    }

    // handlePrevClick=async ()=>{
    //     this.setState({ page: this.state.page - 1 },()=>{this.updatenews();});

    // }
    // handleNextClick=async ()=>{
    //     this.setState({page:this.state.page+1},()=>{this.updatenews();});

    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    };

    render() {
        return (
            <>
                <h2 className="text-center" style={{marginTop:'100px',}}>NewsApp-Headlines</h2>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    style={{margin:'0% 5% 0% 5%'}}
                >
                    <div className="container mx-10 my-3">
                        <div className="row my-3">
                            {this.state.loading && this.state.articles.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element.title ? element.title : "Bi"} desc={element.description ? element.description : "Hi"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>


                {/* <div className="container">
                        <div className=" d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                        </div>
                    </div> */}
            </>
        )
    }
}

export default News