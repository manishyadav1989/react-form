/*
* Reactjs App
* @Author Yuvraj Yadav
* @copyright Yuvisoft Technologies Pvt Ltd.
*/
/* define input field */
class Input extends React.Component {
  	render() {
    	return 	<div className="form-group">
					<label htmlFor={this.props.data.forHtml} className="cols-sm-2 control-label">{this.props.data.label}</label>
					<div className="cols-sm-10">
						<div className="input-group">
							<span className="input-group-addon"><i className={this.props.data.icon} aria-hidden="true"></i></span>
							<input type={this.props.data.type} className="form-control" name={this.props.data.name} id={this.props.data.id}  placeholder={this.props.data.placeholder} />
						</div>
					</div>
				</div>
 	}
}

/* define Button */
class Button extends React.Component {
	render() {
    	return 	<div className="form-group ">
					<button type="button" className={'btn btn-lg btn-block login-button ' + this.props.type} >{this.props.name}</button>
				</div>
 	}

 	handleClick: function(e) {
 		alert('submit')
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
							{this.props.fields.map(function(field, key){
								return <Input data={field} key={key} />
							})}
							<Button name={this.props.bname} type={this.props.btype} />
						</form>
					</div>
				</div>
  	}
}

var fieldsList = [
			{
				forHtml:"name",
				label:"Your Name",
				icon:"fa fa-user fa",
				type:"text",
				name:"name",
				id:"name",
				placeholder:"Enter your Name"
			},
			{
				forHtml:"email",
				label:"Your Email",
				icon:"fa fa-envelope fa",
				type:"text",
				name:"email",
				id:"email",
				placeholder:"Enter your Username"
			},
			{
				forHtml:"password",
				label:"Password",
				icon:"fa fa-lock fa-lg",
				type:"password",
				name:"password",
				id:"password",
				placeholder:"Enter your Password"
			},
			{
				forHtml:"confirm",
				label:"Confirm Password",
				icon:"fa fa-lock fa-lg",
				type:"password",
				name:"confirm",
				id:"confirm",
				placeholder:"Confirm your Password"
			}
		];

ReactDOM.render(
  <Form name="Sign Up" method="POST" action="#"  fields={fieldsList} bname="Register" btype="btn-primary" />,
  document.getElementById('app')
);