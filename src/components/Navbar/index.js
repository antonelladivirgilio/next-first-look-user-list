import PropTypes from 'prop-types';
import React from 'react';
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'


export default function Navbar(props) {

    return (
        <nav>
            <Link as={NextLink} href='/'>
                Home
            </Link>
            <Link as={NextLink} href='/hello'>
                Hello
            </Link>
            <Link as={NextLink} href='/users'>
                Users
            </Link>
        </nav>
    );
}