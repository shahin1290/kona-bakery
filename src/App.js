import React, { useState, useEffect } from 'react';
import images from './api-mock.json'
import './App.css';

const App = () => {
	const [imageList, setImageList] = useState(images.resources);

	return (
		<>
		
			<div className='image-grid'>
				{imageList.map((image) => (
					<img src={image.url} alt=""></img>
				))}
			</div>
			
		</>
	);
};

export default App;
