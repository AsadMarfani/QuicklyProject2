import React, { Component } from "react";
import ReactDOM from "react-dom";

export class ToolTip extends Component {

	constructor(props) {
		super(props)
		this.state =  {opacity: false};
		this.toggle =  this.toggle.bind(this);
	}
	toggle() {
		const toolTipNode = ReactDOM.findDOMNode(this);
		this.setState({
			opacity: !this.state.opacity,
			top: toolTipNode.offsetTop,
			left: toolTipNode.offsetLeft
		});
	}
	render() {
		const styles = {
			zIndex: (this.state.opacity) ? 1000 : -1000,
			opacity: +this.state.opacity,
			top: (this.state.top || 0) + 20,
			left: (this.state.left || 0) - 30
		};
		return (
			<div style={{display: 'inline'}}>
				<span style = {{color: '#006400', textDecoration: 'underline'}} onMouseEnter = {this.toggle} onMouseOut = {this.toggle}>
					<b>{this.props.children}</b>		
				</span>
				<div className = "tooltip bottom" role = "tooltip" style = {styles}>
					<div className = "tooltip-arrow"></div>
					<div className = "tooltip-inner">{this.props.text}</div>
				</div>
			</div>
		)
	}
}