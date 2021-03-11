import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';


class StreamDelete extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {
		return (<>
			<button onClick={this.handleDeleteStream} className="ui negative button">Delete</button>
			<Link to="/" className="ui button">Cancel</Link>
		</>);
	}

	handleDeleteStream = () => {
		const { id } = this.props.match.params;
		return this.props.deleteStream(id);
	}

	renderContent() {
		if (!this.props.stream) {
			return "Are you sure you want to delete the Stream?";
		}
		else return (`Are you sure you want to delete the Stream "${this.props.stream.title}"?`);
	}

	render() {
		return (
			<div>
				StreamDelete
				<Modal
					title="Delete Stream"
					content={this.renderContent()}
					actions={this.renderActions()}
					onDismiss={() => history.push('/')} />
			</div>
		);
	}
};


const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);