import React from 'react';
import Home from './components/react-router/Home';
import About from './components/react-router/About';
import Contact from './components/react-router/Contact';
import Products from './components/react-router/Products';
import Login from './components/react-router/Login';
import NotFound from './components/react-router/NotFound';
import Form from './components/react-router/Form';
import TodoList from './components/todolist-project/TodoList';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/products',
        exact: false,
        main: ({ match, location }) => <Products match={match} location={location} />
    },
    {
        path: '/login',
        exact: false,
        main: ({ location }) => <Login location={location} />
    },
    {
        path: '/form',
        exact: false,
        main: () => <Form />
    },
    {
        path: '/todolist',
        exact: false,
        main: () => <TodoList />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;