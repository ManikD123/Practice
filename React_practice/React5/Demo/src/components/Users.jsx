import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Users = () => {

    const [data, setData] = useState([]);

    // const id = 1;
const params = useParams();
console.log(params);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`);
                const result = await response.json();
                console.log(result)
                setData(result);
            } catch (error) {
                console.log(error);

            }
        }
        fetchdata();
    }, []);

    return (<div>
        {!data ? (
            <div>Loading ....</div>
        ) : (
            <div>
                <strong>{data?.name}</strong>
                Email: {data?.email}
                Phone: {data?.phone}
                <br />
                Company name:
                {data?.company?.name}
                <br />
                <a
                    href={`http://${data.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                > {data.website}
                </a>
            </div>
        )
        };
    </div>
    )
}

export default Users
