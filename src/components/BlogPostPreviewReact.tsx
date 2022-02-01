 import React from 'react'

export default ({title, url, publishDate}) => {

    // console.log('3, post', post)

    const handleClick = e => {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.className = 'fadeout' ;
    }

    return (
        <div className='post-preview-container'>
            <article className="post-preview">
                <header>
                    <a href={url}   onClick={handleClick}>
                        <p className="title">{title}</p>
                    </a>                     
                </header>
                <time>{publishDate}</time>
            </article>             
        </div>
    )
}