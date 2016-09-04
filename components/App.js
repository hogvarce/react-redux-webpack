import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div>This App module</div>
                <div>Second line</div>
                <TextDisplay />
            </div>
        )
    }
}
