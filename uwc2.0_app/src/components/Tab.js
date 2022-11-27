import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Tab extends Component {
	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	}

	render() {
		const {
			onClick,
			props: {
				activeTab,
				label,
				path
			},
		} = this;

		let className = 'tab-list-item';

		if (activeTab === label) {
			className += ' tab-list-active';
		}

		return (
			<div
				className={className}
				onClick={onClick}
			>
				<Link to={path}>
					{label}
				</Link>
			</div>
		);
	}
}
  
export default Tab;