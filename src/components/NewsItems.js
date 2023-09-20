import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, url,author,date } = this.props;
    return (
      <div className="card my-3 max-">
        <img src={!imageUrl?"https://images.unsplash.com/photo-1557186814-b29c2b31d57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwtZURVQmw4RlN3MHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60":imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="badge rounded-pill bg-primary">New</p>
          <p className="card-text descri">{description}</p>
          <p className="card-text"><small className="text-danger">By {!author?"Unknown":author}</small></p>
          <p className="card-text"><small className="text-primary"> On {new Date(date).toGMTString()}</small></p>
          <a href={url}  className="btn btn-dark btn-sm">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItems;
