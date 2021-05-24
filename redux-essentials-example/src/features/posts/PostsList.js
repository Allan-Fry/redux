import React from 'react';
import { useSelector } from 'react-redux';


export const Postslist = () => {
    const posts = useSelector(state => state.posts);


    const renderedPosts = posts.map(post => (
        <article className="post-expcept" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>


    ));

    return (
        <section class="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>


    );


}