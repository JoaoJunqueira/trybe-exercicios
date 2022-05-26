import React from 'react'

class UserProfile extends React.Component {
    render() {
        const { id, name, email, avatar } = this.props.user;

        return(
            <div className="user">
                <p>nome: {name}</p>
                <p>id: {id}</p>
                <p>email: {email}</p>
                <p>avatar: {avatar}</p>
                <br></br>
            </div>
        )
    }
}

export default UserProfile