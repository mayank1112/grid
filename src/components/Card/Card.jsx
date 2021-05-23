import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import './Card.css';

const Card = ({ card }) => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const generateCard = async () => {
            setLoading(true);
            const { url } = card;
            const response = await axios.get(url);
            setImage(response.data.sprites.front_default);
            setLoading(false);
        };
        generateCard();
    }, []);

    const { name } = card;
    return (
        <div className='contentCard'>
            <div>{!loading ? <img src={image} alt={name} /> : <Loader />}</div>
            <div>{name}</div>
        </div>
    );
};

Card.propTypes = {};

export default Card;
