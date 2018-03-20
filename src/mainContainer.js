import React, {PureComponent} from 'react'
import axios from 'axios'

class MainContainer extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            data: []
        };
    }

    componentWillMount() {
        const _this = this;
        this.serverRequest =
        axios
             .get("https://jsonplaceholder.typicode.com/photos?_start=0&_end=10")
             .then(function(result) {
                _this.setState({
                    data: result.data
                })  
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