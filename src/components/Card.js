import React from 'react';

class Card extends React.Component{
	render(){
		let {name,email,id}=this.props;
		return (
			<div className="tc grow bg-light-green br3 pa2 ma1 dib bw2 shadow-5">
				<img src={`http://robohash.org/${id}/size=150x150`} alt=""/>
				<div>
					<h1>{name}</h1>
					<p>{email}</p>
				</div>
			</div>
			);
		}
	}

export default Card;