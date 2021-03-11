import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
import { Link } from 'react-router-dom';


class StreamCreate extends React.Component {

	onSubmit = formValues => {
		this.props.createStream(formValues);
	}

	render() {
		return (
			<div>
				<h1 className="ui header">Create a Stream</h1>
				<StreamForm onSubmit={this.onSubmit} />
				<div className="ui hidden divider" />
				<Link to="/" className="ui button basic secondary">Cancel</Link>
			</div>

		);
	}
}

export default connect(null, {
	createStream
})(StreamCreate);