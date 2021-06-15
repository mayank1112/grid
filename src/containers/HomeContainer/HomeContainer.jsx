import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Card from '../../components/Card/Card';
import PreviousButton from '../../components/PreviousButton/PreviousButton';
import NextButton from '../../components/NextButton/NextButton';
import './HomeContainer.css';
import Loader from '../../components/Loader/Loader';

export const HomeContainer = () => {
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(1110);
    const [count, setCount] = useState(3);

    useEffect(() => {
        const generateGrid = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${offset}`);
            setData(response.data.results);
            setCount(response.data.count)
        };
        generateGrid();
    }, [offset]);

    const getPreviousCards = () => {
        setOffset(offset - 3);
    }

    const getNextCards = () => {
        setOffset(offset + 3);
    }

    return (
        <>
            <div className='content1'>

                <div className='content2'>

                    <div className='content3'>

                        <div className='content4'>
                            content
                 </div>
                    </div>
                </div>
            </div>
        </>
    );
};