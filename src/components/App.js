import React, { Component } from 'react';
import random from 'random';
import Card from './Card';

export default class App extends Component {
    state = {
        currentTheme: {
            bgColor: 'black'
        }
    };

    themeColors = [
        'black',
        'orange',
        'lightgreen',
        'purple',
        'aqua',
        'aquamarine',
        'violet'
    ];

    changeTheme = () => {
        const rand = random.int(0, this.themeColors.length - 1);

        const themeColor = this.themeColors[rand];
        const root = document.getElementById('root');
        const nextButton = document.getElementById('next');

        nextButton.style.backgroundColor = themeColor;
        root.style.backgroundColor = themeColor;
        root.style.color = themeColor;
    };

    render() {
        return (
            <Card changeTheme={this.changeTheme}/>
        );
    }
}
