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
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(3);

    useEffect(() => {
        generateGrid();
    }, [offset]);

    const generateGrid = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${offset}`);
        setData(response.data.results);
        setCount(response.data.count)
    };

    const getPreviousCards = () => {
        setOffset(offset - 3);
    }

    const getNextCards = () => {
        setOffset(offset + 3);
    }

    return (
        <>
            <div className='homeCardsContent'>
                {data && data.length > 0 ? data.map((card) => (
                    <Card key={card.name} card={card} />
                )) : <Loader />}
            </div>
            <div className='homeButtonsContent'>
                <PreviousButton disabled={offset === 0} onClick={getPreviousCards} />
                <NextButton disabled={offset >= count - 3} onClick={getNextCards} />
            </div>
        </>
    );
};