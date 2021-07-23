import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserCheck extends Component {
    render() {
        return (
            <div>
                <Link 
                    to='/'
                    className='button'
                >Back</Link>
            </div>
        )
    }
}

export default UserCheck;