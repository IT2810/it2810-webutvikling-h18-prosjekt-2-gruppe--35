import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image:null,
        }
    }

    fetchSvg(imageUrl) {
        console.log(imageUrl);
        const imagePromise = new Promise((resolve) => resolve(
            fetch(imageUrl)
                .then(res => res.text())
                //.then(result => console.log(result))
            ));

        Promise.all([imagePromise]).then(result => {
            console.log(result);
            this.setState({image:result[0]});
        });
    }

    render() {
        this.fetchSvg(this.props.imageUrl);

        return (
        <div className="graphic" dangerouslySetInnerHTML={{__html:this.state.image}}>
        </div>
        );
    }
}

export default Image;
