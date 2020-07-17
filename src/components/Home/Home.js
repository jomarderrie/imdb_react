import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColorGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import './Home.css';

export default class Home extends Component {
	state = {
		movies: [],
		heroImage: null,
		loading: false,
		totalPages: 0,
		searchTerm: ''
	};

	componentDidMount() {
		this.setState({ loading: true });
		const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-us&page=1`;
		this.fetchItems(endpoint);
	}

	loadMoreItems = () => {
		let endPoint = '';
		this.setState({ loading: true });

		if (this.state.searchTerm === '') {
			endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-us&page=${this.state.currentPage + 1}`;
		} else {
			endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-us&query=${this.state
				.searchTerm}&page=${this.state.currentPage + 1}`;
		}
		this.fetchItems(endPoint);
	};

	fetchItems = (endpoint) => {
		fetch(endpoint).then((result) => result.json()).then((results) => {
			this.setState({
				movies: [ ...this.state.movies, ...results.results ],
				heroImage: this.state.heroImage || results.results[0],
				loading: false,
				currentPage: results.page,
				totalPages: results.total_pages
			});
		});
	};

	render() {
		return (
			<div className="rmdb-home">
				<HeroImage />
				<SearchBar />
				<FourColorGrid />
				<Spinner />
				<LoadMoreBtn />
			</div>
		);
	}
}
