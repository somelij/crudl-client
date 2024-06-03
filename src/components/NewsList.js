import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NewsList = ({ news }) => (
    <div>
        {news.map((newsItem) => (
            <Card key={newsItem.id} style={{ margin: '20px 0' }}>
                <CardContent>
                    <Link to={`/news/${newsItem.id}`}>
                    <Typography variant="h5">{newsItem.title}</Typography>
                    <Typography variant="body2">{newsItem.content}</Typography>
                    {newsItem.image_url && (
                        <img src={newsItem.image_url} alt={newsItem.title} style={{ width: '100%', marginTop: '10px' }} />
                    )}
                    </Link>
                </CardContent>
            </Card>
        ))}
    </div>
);

export default NewsList;