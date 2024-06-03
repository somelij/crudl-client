import React from 'react';

import { Typography } from '@mui/material';

const NewsFilter = ({ filter, setFilter }) => (
    <div>
        <Typography variant="h5">
            Фильтр по дате:
            <input
                type="date"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
        </Typography>
    </div>
);

export default NewsFilter;