import React, {PureComponent} from 'react'
import PhotoSingle from './photoSingle'
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

    // renderSingle(content) {
    //         this.state.data.map((content) => {
    //             return (
    //                 <div key={content.id} className="content">
    //                     <p> {content.title} </p>
    //                 </div>
    //             );
    //         })
    //     }

    // componentDidMount() {
    //     this.renderSingle(this.state.data)
    // }

    render() {
        return (
            <div className="maincontainer">
                <div className="single container" id={this.state.data.map(i => i.id)}>
                    <p> {this.state.data.map(i => i.title)} </p>
                    <img src={this.state.data.map(i => i.url)}/>
                </div>
            </div>
        )
    }   
}

export default MainContainer