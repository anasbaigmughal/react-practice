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

//JSX code, a component function must return single element, an array could also be returned
function HelloWorld() {
    return [<Hello />, <World />];
}

//JS code, a component function must return single element, an array could also be returned
function HelloWorld() {
    return [
        React.createElement(Hello, null),
        React.createElement(Hello, null)
    ];
}

//to return tables in react by retaining their structure, fragments help to produce valid HTML
function NameCells() {
    return (
        <React.Fragment>
            <td>First Name</td>
            <td>Last Name</td>
        </React.Fragment>
    )
}

//empty tag which represent fragments
function NameCells() {
    return (
        <>
            <td>First Name</td>
            <td>Last Name</td>
        </>
    )
}

//conditional statement-1 in JSX
function ValidIndicator() {
    const isValid = true;
    return (
        <span>{isValid ? 'valid' : 'not valid'}</span>
    );
}

//conditional statement-2 in JSX
function ValidIndicator() {
    const isValid = true;
    return (
        <span>
            {isValid && 'valid'}
            {!isValid && 'not valid'}
        </span>
    );
}

//renders like this, ReactDOM.render([React Element], [DOM element]);
ReactDOM.render(
    <HelloWorld />,
    document.querySelector('#root')
);

Continue from ''
