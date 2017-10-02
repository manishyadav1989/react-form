/*
* Reactjs Form js
* @Author Yuvraj Yadav
* @copyright Yuvisoft Technologies Pvt Ltd.
*/
/* define input field */
class Input extends React.Component {
  	render() {
    	return 	<div className="form-group">
					<label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
					<div className="cols-sm-10">
						<div className="input-group">
							<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
							<input type="text" className="form-control" name="name" id="name"  placeholder="Enter your Name"/>
						</div>
					</div>
				</div>
 	}
}

/* define forms */
class Form extends React.Component {
  	render() {
    	return 	<div>
    				<div className="panel-heading">
	               		<div className="panel-title text-center">
	               			<h1 className="title">{this.props.name}</h1>
	               			<hr />
	               		</div>
	            	</div> 
	            	<div className="main-login main-center">
						<form className="form-horizontal" method={this.props.method} action={this.props.action}>
							<Input />
						</form>
					</div>
				</div>
  	}
}