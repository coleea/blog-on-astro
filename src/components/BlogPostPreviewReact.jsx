 import React from 'react'
/* jsxImportSource: react */

// Unable to resolve a renderer that handles this file! With more than one renderer enabled, you should include an import or use a pragma comment.
// Add import React from 'react' or /* jsxImportSource: react */ to this file.


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
    <a href={post.url}   onClick={handleClick}   ><h1 className="title">{post.title}</h1></a>
    </header>
    <a href={post.url} onClick={handleClick}>
                    {post.description}
                    </a>
                    <hr/>
                </article>)
    }