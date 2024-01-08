import viteLogo from '/vite.svg'
import { Component } from "react";

class ImageComponent extends Component {
    render(){
        return( 
            <img src={this.props.url} alt={this.props.tagAlt}/>
        )
    }
}

export default ImageComponent