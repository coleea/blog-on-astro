 import React from 'react'

export default ({title, url, publishDate}) => {

    // console.log('3, post', post)

    const handleClick = e => {
        // e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('fadeout') ;
    }

    return (
        <div className='post-preview-container'>
            <article className="post-preview">
                <div className="heroImgWrapper" style={{float:'left' }}>
                    <img className="heroImgWrapper" style={{borderRadius : '1em', marginRight : '20px'}} src="./empty.jpg" width="160px" height="160px"></img>
                </div>
                <div>
                    <div clasName="titleWrapper" style={{height:"50%"}}>
                        <a href={url} onClick={handleClick}>
                            <p className="title">{title}</p>
                        </a>                     
                    </div>
                    <div clasName="timeWrapper" style={{textAlign : 'right'}}>
                        <time>{publishDate}</time>
                    </div>
                </div>                
            </article>             
        </div>
    )
}