import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsItem = () => {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        axios.get(`/api/news/${id}`)
            .then(response => setNewsItem(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!newsItem) return <p>Loading...</p>;

    return (
        <div>
            <h1>{newsItem.title}</h1>
            <img src={newsItem.image_url} alt={newsItem.title} />
            <p>{newsItem.content}</p>
        </div>
    );
};

export default NewsItem;