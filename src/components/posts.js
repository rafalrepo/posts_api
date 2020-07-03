import React, { useState, useEffect} from 'react';
import Post from './post';
import './style.css';

const Posts = () => {

    const ENDPOINT = 'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/';
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [number, setNumber] = useState(3);
    const [alert, setAlert] = useState(false);
    const maxNumber = 100;
    const upNumber = 44;


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${ENDPOINT}?number=${number}`);
            const json = await response.json();
            const { posts } = json;
            setLoading(false);
            setPosts(posts);
        }
        fetchData();
      }, [number]);

    const list = posts.map(element => {
        return <Post key = {element.ID} element = {element}/>;
    })

    const morePosts = () => {
        const count = number - maxNumber;
        const newNumber = number + upNumber;

        if(number === maxNumber){
            setAlert(true)

            setTimeout(()=>{
                setAlert(false)
            }, 5000)
        }
        else if(newNumber < maxNumber){
            setLoading(true);
            setNumber(newNumber);
        }else{
            setLoading(true);
            setNumber(100);
        }

    }

    return ( 
        <div className="container">
            <section className={loading ? 'posts_h': 'posts'}> 
                <div className={loading ? 'show': 'hidden'}>Loading...</div>
                { list } 
            </section>
            <div className={alert ? 'alert' : 'hidden'}>There are no more posts.</div>
            <button className="btn" onClick={morePosts}>More posts</button>
        </div>
    )
}

export default Posts;