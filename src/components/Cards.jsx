import { Carousel } from '@mantine/carousel';
import { useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function Cards() {
    const autoplay = useRef(Autoplay({ delay: 3000 }));

    const [data, setData] = useState([]);
    const [today, setToday] = useState('day');

    const btnToday = (value) => {
        setToday(value)
    }
    const btnWeek = (value) => {
        setToday(value)
    }

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/trending/all/${today}?language=ru&api_key=e840b9b3b2fc83813b3ed14c510e4105`
            )
            .then((response) => {
                console.log(response);
                setData(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [today]);

    return (
        <>
            <div style={{ display: 'flex', padding: '5px 15px', marginLeft: '70px' }}>
                <h2>В тренде</h2>
                <button
                onClick={() => btnToday()}
                >Сегодня</button>
                <button
                onClick={() => btnWeek()}
                >На этой неделе</button>
            </div>
            <Carousel
                style={{ width: '95vw', margin: 'auto',marginTop:'15px',marginBottom:'15px'}}
                withIndicators
                height={400}
                slideSize="0%"
                slideGap="md"
                loop
                align="start"
                slidesToScroll={3}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {data.map((movie, index) => (
                    <Carousel.Slide style={{ cursor: 'pointer' }} key={index}>
                        <img
                            style={{ width: '200px', height: '300px' }}
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt=""
                        />
                        <h6 style={{ fontWeight: '750', marginTop: '8px' }}>{`${movie.title} ${movie.name}`}</h6>
                        <p>{moment(`${movie.release_date} ${movie.first_air_date}`).format('MMMM D, YYYY')}</p>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </>
    );
}

export default Cards;