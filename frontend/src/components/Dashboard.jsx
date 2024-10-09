import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig'; // Corrected import path

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/your-api-endpoint'); // Adjust the endpoint
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li> // Adjust based on your data structure
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
