import React from 'react';
import Post from './post';

class Posts extends React.Component{

    constructor(){
        super();
        this.ENDPOINT = 'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/';
        this.API_POSTS_LIMIT = '?number=3';
        this.state = {
            posts: []
        }
    }

    async getPosts(){
        const response = await fetch(this.ENDPOINT+this.API_POSTS_LIMIT);
        const json = await response.json();
        const { posts } = json;
        this.setState({ posts: posts });
    }

    componentDidMount() {
        this.getPosts();
    }

    render(){

        const { posts } = this.state;

        const list = posts.map(element => {
            return  <Post key={element.ID} element={element} />;
        })

        return(
            <div>
                {list}
            </div>
        )   
    }
}

export default Posts;