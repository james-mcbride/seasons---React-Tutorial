import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
    constructor(props){
        super(props);

        this.state={lat: 40};

        const options = {
            enableHighAccuracy: true,
            maximumAge: 5000,
            timeout: 5000
        };
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => console.log(err),
            options
        );
    }

    render(){

        return <div>Latitude: {this.state.lat} </div>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))