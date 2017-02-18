var React = require('react');
var ReactDOM = require('react-dom');
import { Main } from "Main";

//Load Custom CSS
require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
	<div>
	 	<Main text="The book you're reading now">React Quickly</Main> was published in 2017. Its awesome!
	 	<br/>I got <Main text = "Period for learning with professionals">Internship</Main> by reading this book.
	 </div>, 
    document.getElementById('app')
);
