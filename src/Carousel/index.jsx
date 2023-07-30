import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch('/api/movies')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.slice(0, 6) });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    const { movies } = this.state;

    return (
      <Carousel>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.imageUrl} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </Carousel>
    );
  }
}

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
