import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { GOOGLE_OAUTH_CLIENT_ID } from '../config';

class GoogleAuth extends React.Component {

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: GOOGLE_OAUTH_CLIENT_ID,
				scope: 'email'
			})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	}

	onSignInAction = () => {
		this.auth.signIn();
	}

	onSignOutAction = () => {
		this.auth.signOut();
	}

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return <div>Auth state Unknown</div>
		} else if (this.props.isSignedIn) {
			return <button className="ui google red button" onClick={this.onSignOutAction}>
				<i className="google icon" />
				Sign Out
			</button>
		} else {
			return <button className="ui primary google button" onClick={this.onSignInAction}>
				<i className="google icon" />
			Sign In with Google
		</button>
		};
	}


	render() {
		return (
			<div>{this.renderAuthButton()}</ div>
		)
	}
}


const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);