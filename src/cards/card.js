import React from 'react'
import './card.css'

export default function Card({Title,Description,Number,photoName,status,children}) {
  return (
    <div className="card-contaner">
<section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <img src={photoName} alt="" />
      </figure>
      <div className="article-body">
        <h2>{Title}</h2>
        <p>
          {Description}
        </p>
        
{children}
      </div>
    </div>
  </article>
</section>
    </div>
  )
}
