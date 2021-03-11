import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';


class StreamList extends React.Component {

	componentDidMount() {
		this.props.fetchStreams();
	}

	renderList = streams => {
		return this.props.streams.map(stream => {
			return (
				<Link to={`/streams/${stream.id}`} className="item" key={stream.id}>
					{this.renderAdmin(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						<div className="header">
							{stream.title}
						</div>
						<div className="description">
							{stream.description}
						</div>
					</div>
				</Link>
			);
		});
	}

	renderAdmin = stream => {
		if (stream.userId === this.props.auth.userId) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
				</div>
			);
		}
		return;
	}

	renderCreateLink = () => {
		if (this.props.auth.isSignedIn) {
			return (
				<div style={{ textAlign: "right" }}>
					<Link to="/streams/new" className="ui basic button secondary">All streams</Link>
				</div>
			);
		}
	}


	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">
					{this.renderList()}
				</div>
				{this.renderCreateLink()}
			</div>
		);
	}
};


const mapStateToProps = state => {
	return {
		streams: Object.values(state.streams),
		auth: state.auth
	};
}


export default connect(mapStateToProps, { fetchStreams })(StreamList);