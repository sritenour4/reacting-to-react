import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'This is text from the state.',
            placeholderText: 'placeholder text from state',
            inputText: '',
            hasLoaded: false
        };
    };

    onInputChange = (e) => {
        this.setState({ inputText: e.target.value })
    };

   toggleHasLoaded = () => {
        this.setState({hasLoaded: !this.state.hasLoaded})
        // this.setState({hasLoaded: true})
    }

    componentDidMount = () => {
        this.setState({hasLoaded: true})
    }

    render() {
        if(this.state.hasLoaded) {
            return (
                <>
                    <h1>{this.props.text}</h1>
                    <h1>{this.state.text}</h1>
                    <input type="text" value={this.state.inputText} placeholder={this.state.placeholderText} onChange={(e) => this.onInputChange(e)} />
                    <button onClick={this.toggleHasLoaded}>Click Me!</button>
                </>
            );
        } else {
            return (
                <>
                <h1>Loading...</h1>
                <button onClick={this.toggleHasLoaded}>Click Me!</button>
                </>
            )
        }
    };
};

// const App = (props) => {
//     return <h1>{props.text}</h1>    
// };

export default App; 