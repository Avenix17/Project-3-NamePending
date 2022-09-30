import React from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql'
})

const Main = (props) => {
    return(
        <ApolloProvider client = {client}>
            <div id = "main">
                <ul>
                    <li>
                        <a href="#">
                        <h2>Title #1</h2>
                        <p>Text Content #1</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <h2>Title #2</h2>
                        <p>Text Content #2</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <h2>Title #2</h2>
                        <p>Text Content #2</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <h2>Title #2</h2>
                        <p>Text Content #2</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <h2>Title #2</h2>
                        <p>Text Content #2</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <h2>Title #2</h2>
                        <p>Text Content #2</p>
                        </a>
                    </li>
                </ul>
            </div>
        </ApolloProvider>
    )
}

export default Main;