// import React from 'react';

import Blog2 from "./Blog2";

//Blogs page
const Blog = () => {
    return (
        <div className="m-5">
            <Blog2></Blog2>
            <h2>Question and Answers</h2>

            <b>1. Tell us the differences between uncontrolled and controlled components.</b>
            <br></br>
            Components in React can be either regulated or uncontrolled. Components that are controlled by React have values that React controls, whereas components that are uncontrolled have values that the DOM controls.

            The usage of uncontrolled components is easier and quicker. They are helpful when its not necessary to regulate the components condition. The DOM itself is responsible for maintaining the components state.

            Because you can regulate the components state, controlled components are more adaptable and potent. They come in handy when you need to carry out an action based on user input. React is in charge of managing the components state.
            <br></br><br></br>
            <b>2. How to validate React props using PropTypes.</b>
            <br></br>
            The sorts of props that a component should receive are specified by the PropTypes library in React. This aids in identifying flaws and mistakes made during development.

            We can define the kinds of props that the component should receive and import PropTypes from the prop-types package to validate React props. PropTypes.string, for instance, can be used to specify a prop that must be a string.


            <br></br><br></br>

            <b>3. Tell us the difference between nodejs and express js.</b>
            <br></br>
            Node.js is a server-side runtime environment for JavaScript code, and Express.js is a framework for Node.js web applications. While Express.js offers a set of tools for building web applications on top of Node.js, Node.js provides the platform for running JavaScript code on the server.

            Working with the file system, network sockets, and other system resources is made possible through Node.js low-level API. For managing HTTP requests, routing, middleware, and other typical web application operations, Express.js offers a high-level API.

            Express.js is a particular framework for creating web applications, whereas Node.js is a runtime environment that supports a variety of frameworks.

            <br></br><br></br>
            <b>4. What is a custom hook, and why will you create a custom hook?</b>
            <br></br>
            A custom hook is a reusable section of code that can be shared by many React application components. Functions with custom hooks control state or carry out additional tasks using React hooks (like useState or useEffect).

            To encapsulate any complicated logic that is used in several locations across our application, we may develop a custom hook. We can reuse this logic by developing a unique hook without adding extra code or issues.

            For instance, we might develop a special hook that has code for controlling the loading state and fetching data from an API. Any component that needs to retrieve data from the API may use this custom hook. We can simplify and increase the reusability of the code in your components by utilizing the custom hook.

        </div>
    );
};

export default Blog;