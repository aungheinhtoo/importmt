import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Trails from '@orcatech/react-neuropsych-trails';

export default class Trail extends React.Component {

	static propTypes = {
		part: PropTypes.string.isRequired,
	}

	state = {
		progress: 0
	}

	constructor(props) {
		super(props);
		this.data = {
			start: undefined,
			stop: undefined,
			events: []
		};
	}

	UNSAFE_componentWillMount() {
		this.data.start = new Date().getTime();
	}

	update = (type, date, correctToken, selectedToken) => {
		this.data.events.push({
			stamp: date.getTime(),
			type: type,
			correctToken: correctToken,
			selectedToken: selectedToken
		});
		console.log(this.data.events[this.data.events.length-1]);
	}

	handleMiss = (date, correctToken, x, y) => {
		this.update("Miss", date, correctToken, { text: "", x: x, y: y });
	}

	handleSuccess = (date, token) => {
		this.update("Success", date, token, token);
		this.setState(prev => ({ progress: ++prev.progress }));
	}

	handleError = (date, correctToken, selectedToken) => {
		this.update("Error", date, correctToken, selectedToken);
	}

	handleCompleted = (date) => {
		this.data.stop = date.getTime();
		console.log("Trails Data:");
		console.log(this.data);
	}

	render() {
		return <Trails
						part={this.props.part}
						progress={this.state.progress}
						feedback={true}
						errorText="X"
						errorDuration={500}
						completedText={"Completed! Please press the next button"}
						onSuccess={this.handleSuccess}
						onError={this.handleError}
						onMiss={this.handleMiss}
						onCompleted={this.handleCompleted}
					/>;
	}
}

// ReactDOM.render(<Trail part="A12"/>, document.getElementById('root'));