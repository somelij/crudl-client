import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsList from '../components/NewsList';
import NewsFilter from '../components/NewsFilter';
import NewsCable from '../components/NewsCable';

const NewsListPage = () => {
    const [news, setNews] = useState([]);
    const [filterDate, setFilterDate] = useState('');

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/news', {
                    params: { date: filterDate },
                });
                setNews(response.data);
            } catch (error) {
                console.error('Ошибка при загрузке новостей:', error);
            }
        };

        fetchNews();
    }, [filterDate]);

    const handleReceivedNews = (data) => {
        setNews((prevNews) => [data.news, ...prevNews]);
    };

    return (
        <div>
            <NewsFilter filter={filterDate} setFilter={setFilterDate} />
            <NewsList news={news} />
            <NewsCable onReceived={handleReceivedNews} />
        </div>
    );
};

export default NewsListPage;