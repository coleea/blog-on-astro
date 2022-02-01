 import React from 'react'

export default ( {post}) => {

    const handleClick = e => {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.className = 'fadeout' ;
    }

    return (                
        <article className="post-preview">

        <style jsx>{`
            .fadeout {
            animation : fadeout 1s
            }

            @keyframes fadeout {
                from { opacity: 1; }
                to   { opacity: 0; }
            }

            a {
                text-decoration: none;
                color : inherit;
                position: relative;
                top: 0;
                transition: top ease 0.5s;
            }

            a:hover {
                top: -12px;
            }
        `}</style>
        
        <header>
            <a href={post.url}   onClick={handleClick}>
                <p className="title">{post.title}</p>
            </a>
        </header>
        <a href={post.url} onClick={handleClick}>
            111
            {post.description}
        </a>
        <hr/>
        </article>
    )
}