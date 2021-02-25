import React, { Component } from 'react';

import Greeter from './components/Greeter'

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            username: '',
            isLoaded: false,
          };      
        // const [username, setUsername] = useState('');
          
     changeInput = (e) => {
        this.setState({ username: e.target.value });
      };
        
    loadPage = () => {
        this.setState({ isLoaded: !this.state.isLoaded });
        this.setState({ isLoaded: true })
    };
  function render() {
        if (this.state.isLoaded) {
          return (
    
        <>
        <Greeter phrase='ay' name='jake' />
        <Greeter phrase='yo' name='garrett' />
        <Greeter phrase='hey' name='josh' />
            <h1 className='text-center'>what's bappin?</h1>
            <input value={this.state.username} onChange={e => this.changeInput(e.target.value)} />
            <p>you are logging in as {this.state.username}</p>
            <button onClick={this.loadPage}>click to load page</button>
            </>
            );
        } else {
            return (
                <>
                <h1>page loading...</h1>
                <button onClick={this.loadPage}></button>
                 </>
            )
        }
    }
    render();
    }
}

export default App;