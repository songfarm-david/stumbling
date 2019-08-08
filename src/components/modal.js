import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import '../style/modal.scss'

export default class Modal extends React.Component {

	constructor(props) {
		super(props)
		console.log('props are', props);
		this.state = {
			active: false,
			content: ['']
		}
		this.message = this.props.path == '?comment_received' ? 'Thanks for your comment. Your comment is awaiting moderation.' : 'Thanks for subscribing! You Rock!'
		this.closeModal = this.closeModal.bind(this)
	}

	componentDidMount() {
		console.log('componentDidMount called');
		// matches certain query parameters to active state
		// REFACTOR: Could put use cases into an array and loop through the array for activating parameters
		if ( window.location.search === '?subscription_confirmed'
	   || window.location.search === '?comment_received' )
		{
			this.setState({active: true})
		}
	}

	render() {
		return (
			<div id="modal" className={this.state.active ? 'modal-open' : ''} onClick={this.closeModal}>
				<ReactCSSTransitionGroup
		          transitionName="modal"
		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={500}
					 transitionAppear={true}
					 transitionLeave={true}
      			 transitionAppearTimeout={500}
					 >
					 {this.renderModal()}
				</ReactCSSTransitionGroup>
			</div>
		)
	}

	renderModal() {
		return this.state.content.map((content, i) => {
			return (
				<div key={i} className="modal-content">
					<div className="modal-header">
						<span className="close" onClick={() => this.closeModal(i)}>&times;</span>
						<h2 id="modalHeader" className={i}>Thank You!</h2>
					</div>
					<div className="modal-body">
						<p>{this.message}</p>
					</div>
					<div className="modal-footer">
						<h3 onClick={() => this.closeModal(i)} className="theme-button">Return to Site</h3>
					</div>
				</div>
			)
		})
	}

	closeModal() {
		console.log('closing modal. States?', this.state);
		this.setState({active: false})
	}

}
