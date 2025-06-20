import{ useEffect } from 'react';
import { useState } from 'react';


const Effect = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            }, []);

            useEffect(() => {
                
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then((res) => res.json())
                    .then((data) => setPosts(data))
                    }, [])
                    console.log(posts);




      //  console.log(users);
       
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <h1>Effect Hook Example</h1>
        </div>
    );
};

export default Effect;
