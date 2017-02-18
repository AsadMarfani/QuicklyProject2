var React = require('react');
var ReactDOM = require('react-dom');
import { ToolTip } from "ToolTip";

//Load Custom CSS
require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
	<div className = " text-center alert alert-success">
		<div className = "jumbotron">
			<h1>ToolTip Widget</h1>
			<hr/>
		</div>
	 	A <ToolTip text = "Pop up the meaning of the word on Mouse Hover">tooltip</ToolTip> is a handy means of providing textual instruction to your<ToolTip text = "Multiple Web Pages build a single website">Web page</ToolTip> visitor and is accomplished in <ToolTip text = "Hyper Text Markup Language">HTML</ToolTip> by using a “title” attribute. HTML provides the element set and element attributes for creating Web pages. Perhaps you want to provide <ToolTip text = "Code that you write">instruction</ToolTip> for specific data, such as a <ToolTip text = "Denoted as <p>">paragraph</ToolTip> or <ToolTip text = "Denoted as <img>">image</ToolTip>. Insert a “title” attribute inside the beginning tag of your element to add a tooltip -- such as “click to see more” -- that will display when your visitor hovers over the data.
	 </div>, 
    document.getElementById('app')
);
