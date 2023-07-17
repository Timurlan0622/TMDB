import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import React from 'react';
import moment from 'moment';

function Genres() {
    const autoplay = useRef(Autoplay({ delay: 3000 }));

    const genresData = [
        {
            name: 'Action',
            image: 'https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg'
        },
        {
            name: 'Adventure',
            image: 'https://m.media-amazon.com/images/I/9132vbg-HLL._AC_UF894,1000_QL80_.jpg'
        },
        {
            name: 'Comedy',
            image: 'https://gumlet.assettype.com/bloombergquint/2023-06/ab7c76d5-9c6f-4750-aa28-79b55d131005/1616e62df3679651586aa87fe32734cf89df9f06f2caa0c11bfec86a0e4aa15a__RI_TTW_.jpg'
        },
        {
            name: 'Drama',
            image: 'https://resizing.flixster.com/j1q6PHK0ZtbdABMQcflU-wH5-eE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y1NGZmNWMyLTczMGUtNDViMS04NzdmLTRiODZiMDM0YWMwOS5qcGc='
        },
        {
            name: 'Fantasy',
            image: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersinfinitywar_19871_cb171514.jpeg?region=0,0,540,810&width=480'
        },
        {
            name: 'Horror',
            image: 'https://assets.vogue.in/photos/5dfb22b2387429000876eb2d/2:3/w_2560%2Cc_limit/007-IT-Halloween-VogueInt-27Sept19-Alamy.jpg'
        },
        {
            name: 'Romance',
            image: 'https://www.tricountysentry.com/wp-content/uploads/images/2022-02-04/10p1.jpg'
        },
        {
            name: 'Sci-Fi',
            image: 'https://images.squarespace-cdn.com/content/v1/6240563c243c8946ffc823c3/81d270f3-4cd2-4919-8743-7c02c135a161/hardsci.png'
        },
        {
            name: 'Thriller',
            image: 'https://michaelsmoviemoments.com/wp-content/uploads/2020/03/F0F24309-4208-4698-A45B-53E0CB8FB6ED-768x1152.jpeg'
        },
        {
            name: 'Animation',
            image: 'https://www.reelviews.net/resources/img/posters/thumbs/addams_2_poster.jpg'
        },
        {
            name: 'Mystery',
            image: 'https://media.aintitcool.com/media/uploads/legacy/ckeditor_assets/pictures/4613/original/sherlo.jpg?1323654725'
        },
        {
            name: 'Crime',
            image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
        }
    ];

    return (
        <>
            <Carousel
                style={{ width: '95vw', margin: 'auto' }}
                withIndicators
                height={300}
                slideSize="0%"
                slideGap="md"
                loop
                align="start"
                slidesToScroll={5}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {genresData.map((genre, index) => (
                    <Carousel.Slide style={{ cursor: 'pointer' }} key={index}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} key={index} className="genre">
                            <h2>{genre.name}</h2>
                            <img style={{width:'150px',height:'200px'}} src={genre.image} alt={genre.name} />
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </>
    );
}

export default Genres;