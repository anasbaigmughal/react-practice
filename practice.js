import React from 'react';
import ReactDOM from 'react-dom';
import { element } from 'prop-types';

//function component, functional component, stateless function component
function HelloWorld() {
    return (
        //Babel compiler converts following JSX to JS
        <div>Hello World</div>
    );
}

//JSX code of Hello()
function Hello() {
    return <span>Hello!</span>;
}

//JS code for Hello()
function Hello() {
    return React.createElement(
        'span',
        {},
        'Hello!'
    );
}

//function signature for React.createElement()
/*
React.createElement(
    string | element,
    [propsObject],
    [children...]
)
*/

function ManyChildren() {
    return React.createElement('div', {},
        React.createElement('div', {}, 'Child1'),
        React.createElement('div', {}, 'Child2',
            React.createElement('div', {}, "Child2_child")
        )
    );
}

//JSX code for SongName(props)
function SongName(props) {
    return (
        <span className='song-name'>
            {props.song.name}
        </span>
    )
}

//JS code for SongName(props)
function SongName(props) {
    return (
        React.createElement('span',
            { className: 'song-name' },
            props.song.name)
    );
}

//function Hello() as span-1
function Hello() {
    return <span>Hello</span>
}

//function World() as span-2
function World() {
    return <span>World</span>
}

//function HelloWorld() as span-1 and span-2
function HelloWorld() {
    return (
        <div>
            <Hello /> <World />
        </div>
    )
}

//renders like this, ReactDOM.render([React Element], [DOM element]);
ReactDOM.render(
    <HelloWorld />,
    document.querySelector('#root')
);

