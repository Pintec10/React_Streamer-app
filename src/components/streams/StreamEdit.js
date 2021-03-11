import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';
import { Link } from 'react-router-dom';


class StreamEdit extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = formValues => {
		this.props.editStream(this.props.match.params.id, formValues);
	}

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<h1>Edit a Stream</h1>
				<StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, "title", "description")} />
				<div className="ui hidden divider" />
				<Link to="/" className="ui button basic secondary">Cancel</Link>
			</div >
		);
	}

};


const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);