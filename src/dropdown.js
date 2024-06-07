import React, { useState } from 'react';
import './dropdown.css';

export const Dropdown = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		setIsVisible(false);
	};

	return (
		<div className='body'>
			<h4>Should you use a dropdown?</h4>
			<div
				className='dropdown'
				onMouseEnter={() => setIsVisible(true)}
				onMouseLeave={() => setIsVisible(false)}>
				<div className='select'>Select</div>
				<div className={`inner ${isVisible ? 'show' : ''}`}>
					<p
						className='option'
						onClick={handleClick}>
						Yes
					</p>
					<p
						className='option'
						onClick={handleClick}>
						Probably not
					</p>
				</div>
			</div>
		</div>
	);
};
