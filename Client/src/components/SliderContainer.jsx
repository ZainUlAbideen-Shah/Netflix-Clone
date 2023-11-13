import React from "react"
import styled from 'styled-components';
import MovieSlider from '../components/MovieSlider';

export default function SliderContainer({ movies }) {
        const getMoviesBetween = (start, end) => {
                return movies.slice(start, end)
        }
        return (
                <SliderWrapper>
                        <MovieSlider data={getMoviesBetween(0, 10)} title='Only on Netflix' />
                        <MovieSlider data={getMoviesBetween(10, 20)} title='Trending now' />
                        <MovieSlider data={getMoviesBetween(20, 30)} title='Action movies' />
                        <MovieSlider data={getMoviesBetween(30, 40)} title='Thriller' />
                        <MovieSlider data={getMoviesBetween(40, 50)} title='Popular' />
                        <MovieSlider data={getMoviesBetween(50, 60)} title='Recommended' />
                        <MovieSlider data={getMoviesBetween(60, 70)} title='Romantic' />
                        <MovieSlider data={getMoviesBetween(70, 80)} title='New Releases' />
                </SliderWrapper>
        )
};

const SliderWrapper = styled.div`
        
`

