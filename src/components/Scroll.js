import React from 'react';

class Scroll extends React.Component{
	render(){
	return(
		<div style={{'overflow-y':'scroll',height:'500px',width:'90%',margin:'0 auto'}}>
			{this.props.children}
		</div>
	)
	}
}
export default Scroll;