import React from 'react'

import '../style/modal.scss'

export default class Modal extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			active: false
		}
		this.message = ''
		this.closeModal = this.closeModal.bind(this)
	}

	componentDidMount() {
		console.log(this.props);
		if (window.location.search === '?subscription_confirmed') {
			this.setState({active: true})
			this.message = "Thanks for subscribing!"
		} else if (
			window.location.search === '?comment_received'
		) {
			this.setState({active: true})
			this.message = "Thanks for your comment. It is currently undergoing moderation."
		}
	}

	render() {
		var modalClasses = this.state.active ? 'modal-content animate' : 'modal-content'
		return (
			<div id="modal"
				className={this.state.active ? 'modal-open' : ''}
				onClick={this.closeModal}
				>
				<div className={modalClasses}>
					<div className="modal-header">
						<span className="close" onClick={this.closeModal}>&times;</span>
						<h2 id="modalHeader">Thank You</h2>
					</div>
					<div className="modal-body">
						<p>{this.message}</p>
					</div>
					<div className="modal-footer">
						<h3 onClick={this.closeModal} className="theme-button">Return to Site</h3>
					</div>
				</div>
			</div>
		)
	}

	closeModal() {
		this.setState({active:false})
	}
}
