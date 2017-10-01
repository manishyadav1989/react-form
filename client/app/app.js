class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <Welcome name="Yuvraj Yadav" />,
  document.getElementById('app')
);
