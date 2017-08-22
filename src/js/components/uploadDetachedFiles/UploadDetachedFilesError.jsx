/**
* UploadDetachedFilesError.jsx
* Created by Minahm Kim
**/
import React from 'react';
import moment from 'moment';

import * as Icons from '../SharedComponents/icons/Icons.jsx';

export default class UploadDetachedFilesError extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			header: '',
			message: '',
			type: this.props.type
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.type != this.state.type) {
			this.setState({
				type: this.state.type
			})
		}
	}

	componentDidMount() {
		this.loadContent();
	}

	loadContent(){
		let header = '';
		let message = '';

		if (this.state.type == 'success') {
			header = 'Your submission has been succesfully published';
		}
		else if (this.props.error) {
			header = this.props.error.header;
			message = this.props.error.description
		}
		else {
			switch(this.props.errorCode){
				case 1:
					header = 'This submission has already been published'
					break;
				case 2:
					header = 'This file has already been submitted';
					break;
				case 3:
					header = 'This file has already been submitted in another submission';
					break;
				default:
					header = 'There was an error with your submission. Please contact the Service Desk';
					break;
			}
		}

		this.setState({
			header: header,
			message: message
		});
	}

	render() {

		let icon = <Icons.ExclamationCircle />
		let className = 'error'

		if(this.state.type == 'success') {
			icon = <Icons.CheckCircle />
			className = 'success'
		}

		return(<div className={"alert alert-" + className + " text-left"} role="alert">
				  <span className="usa-da-icon error-icon">{icon}</span>
				  <div className="alert-header-text">{this.state.header}</div>
				  <p>{this.state.message}</p>
			  </div>);
	}
}