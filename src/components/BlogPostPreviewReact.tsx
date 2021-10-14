 import React from 'react'

export default ( {post}) => {

    const handleClick = e => {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.className = 'fadeout' ;
    }

    return (           
             
        <div className='post-preview-container'>
            <article className="post-preview">

                <style jsx>{`

                    .post-preview-container {
                        border-radius : 1em ;
                        border : solid 2px gray ;
                        padding-bottom : 1em ;
                        margin : 1em 0 1em 0 ;
                    }

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
                        top: -0.3rem;
                    }
                `}</style>

                <header>
                    <a href={post.url}   onClick={handleClick}>
                        <p className="title">{post.title}</p>
                    </a>
                </header>
                <a href={post.url} onClick={handleClick}>
                    {post.description}
                </a>
                {/* <br/> */}
            </article>
        </div>
    )
}