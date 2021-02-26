import React, { useEffect } from 'react'
import Greeter from './Greeter';
import { useState } from 'react';

const App = (props) => {

    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState('false');

    useEffect(() => {
        if (loaded) {
            setTimeout(() => setLoaded(!loaded), 3000);
        }
    }, [loaded]);

    // conditional render
    if (loaded) {
        return (
            <div>
                <h1>Website loading...</h1>
                <button type="button" onClick={() => setLoaded(!loaded)}>Click me to toggle the state of loaded</button>
            </div>
        )
    }

    return (
        <>
            <Greeter name="Shannon" phrase="How are you today?" />
            <Greeter name="Michael" phrase="Can I help you with something?" />
            <Greeter name="Robert" phrase="Have a nice day!" />
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <p>You are logging in as: {username}</p>
            <button type="button" onClick={() => setLoaded(!loaded)}>Click me to toggle the state of loaded</button>
        </>
    )
}

export default App;







// old lab 
// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             text: 'This is text from the state.',
//             placeholderText: 'placeholder text from state',
//             inputText: '',
//             hasLoaded: false
//         };
//     };

//     onInputChange = (e) => {
//         this.setState({ inputText: e.target.value })
//     };

//    toggleHasLoaded = () => {
//         this.setState({hasLoaded: !this.state.hasLoaded})
//         // this.setState({hasLoaded: true})
//     }

//     componentDidMount = () => {
//         this.setState({hasLoaded: true})
//     }

//     render() {
//         if(this.state.hasLoaded) {
//             return (
//                 <>
//                     <h1>{this.props.text}</h1>
//                     <h1>{this.state.text}</h1>
//                     <input type="text" value={this.state.inputText} placeholder={this.state.placeholderText} onChange={(e) => this.onInputChange(e)} />
//                     <button onClick={this.toggleHasLoaded}>Click Me!</button>
//                 </>
//             );
//         } else {
//             return (
//                 <>
//                 <h1>Loading...</h1>
//                 <button onClick={this.toggleHasLoaded}>Click Me!</button>
//                 </>
//             )
//         }
//     };
// };

// const App = (props) => {
//     return <h1>{props.text}</h1>    
// };
