import React from 'react'
import image from '../assets/news.jpg'

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card d-inline-block mb-3 my-3 mx-3" style={{maxWidth:"400px"}}>
        <img src={src ? src : image} style={{ height:"300px",objectFit:"cover"}}className="card-img-top" alt="..."/>
        <div className="card-body" px-2 py-2>
            <h5 className="card-title">{title.slice(0, 60)}</h5>
            <p className="card-text">{description ? description.slice(0,90): "News description not available"}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}

export default NewsItem