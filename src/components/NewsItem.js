import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,desc,imageUrl,newsUrl,source,author,date}=this.props;
        return (
            <div>
                <div className="card text-center">
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={imageUrl?imageUrl:"https://source.unsplash.com/random"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p class="card-text"><small class="text-muted">By {author?author:"Unknown"} on {date}</small></p>
                    <p className="card-text">{desc}</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark ">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
