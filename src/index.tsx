import React, { Component } from 'react'
import ReactDOM from "react-dom";
import GoogleLogin from 'react-google-login'

class App extends Component {

 responseGoogle = (response: any) => {
  console.log(response);
  console.log(response.profileObj)
}
    render() {
        return (
            <div>
                <GoogleLogin
                clientId="281810322240-fqiet3bgorilegtdtr7boeqrifq8tolc.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
