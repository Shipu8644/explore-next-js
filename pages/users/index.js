import React from 'react';
import Link from 'next/link'
const index = ({ users }) => {
    const style = {
        color: 'blue',
        margin: '30px'
    }
    return (
        <div style={style}>

            < h1 > This is Users page: {users.length}</h1>
            {
                users.map(user => <p
                    key={user.id}
                >

                    {user.name}
                    <li>
                        <Link href={`users/${user.id}`}>
                            <a style={{ color: 'red' }}>Check</a>
                        </Link>
                    </li>
                </p>)
            }
        </div >
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();

    return {
        props: { users } // will be passed to the page component as props
    }
}