import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import axios from 'axios';
import { useState } from 'react';

export const Home = () => {
    const [data, setData] = useState('');

    const generateGrid = async () => {
        const response = await axios.get('/mock.json');
        setData(response.data.value);
    };

    useEffect(() => {
        generateGrid();
    }, []);

    const onClick = () => {
        console.log('click');
    };

    return (
        <Button
            onClick={onClick}
        >{data}</Button>

    );
};