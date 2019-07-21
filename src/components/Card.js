import React, { Component } from 'react';
import random from 'random';

export default class Card extends Component {
    state = {
        currentQuote: {
            id: 1,
            quoteText: 'Veni, vidi, vici.',
            author: 'Caesar'
        }
    };

    quotes = [
        {
            id: 1,
            quoteText: 'Veni, vidi, vici.',
            author: 'Caesar'
        },
        {
            id: 2,
            quoteText: 'Don\'t cry because it\'s over, smile because it happened.',
            author: 'Dr. Seuss'
        },
        {
            id: 3,
            quoteText: 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.',
            author: 'Marilyn Monroe'
        },
        {
            id: 4,
            quoteText: 'Be yourself; everyone else is already taken.',
            author: 'Oscar Wilde'
        },
        {
            id: 5,
            quoteText: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
            author: 'Albert Einstein'
        },
        {
            id: 6,
            quoteText: 'So many books, so little time.',
            author: 'Frank Zappa'
        },
        {
            id: 7,
            quoteText: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
            author: 'Bernard M. Baruch'
        },
        {
            id: 8,
            quoteText: 'A room without books is like a body without a soul.',
            author: 'Marcus Tullius Cicero'
        },
        {
            id: 9,
            quoteText: 'You only live once, but if you do it right, once is enough.',
            author: 'Mae West'
        },
        {
            id: 10,
            quoteText: 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
            author: 'J.K. Rowling, Harry Potter and the Goblet of Fire'
        }
    ];

    style = {
        cardStyle: {
            width: '500px',
            backgroundColor: '#fff',
            textAlign: 'center',
            borderRadius: '5px',
            padding: '20px 20px'
        },

        quoteStyle: {
            display: 'block',
            padding: '40px 0',
            fontWeight: '500',
            fontSize: '1.75em',
            transition: '.7s all ease-in-out'
        },

        authorStyle: {
            display: 'block',
            padding: '20px 0',
            textAlign: 'right',
            fontSize: '1em',
            transition: '.7s all ease-in-out'
        },

        quoteIcon: {
            fontSize: '1.0em',
            marginRight: '0.4em'
        },

        buttonStyle: {
            padding: '10px 20px',
            backgroundColor: 'pink',
            border: 'none',
            borderRadius: '3px',
            color: '#fff',
            cursor: 'pointer',
            transition: '.7s all ease-in-out'
        }
    };

    nextQuote = () => {
        const rand = random.int(0, this.quotes.length - 1);
        const nextQuote = this.quotes[rand];
        this.setState({currentQuote: nextQuote});
        this.props.changeTheme();
    };

    render() {
        return (
            <div className="card" style={this.style.cardStyle}>
                <span id="quote" className="quote" style={this.style.quoteStyle}>
                    <i className="fa fa-quote-left" style={this.style.quoteIcon}></i>
                    {this.state.currentQuote.quoteText}
                </span>
                <span id="author" className="author" style={this.style.authorStyle}>- {this.state.currentQuote.author}</span>
                <button id="next" className="next" style={this.style.buttonStyle} onClick={this.nextQuote}>Next quote</button>
            </div>
        );
    }
}