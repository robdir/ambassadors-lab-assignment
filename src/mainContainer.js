import React, {PureComponent} from 'react'

class MainContainer extends PureComponent {

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    }

    render() {
        return (
            <div className="maincontainer">
            </div>
        )
    }
}

export default MainContainer