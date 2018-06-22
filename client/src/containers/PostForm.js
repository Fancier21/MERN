import React, { Component } from 'react';
import {connect} from 'react-redux';
import { onAddPost } from '../actions';

class PostForm extends Component {

    state = {
        title: '',
        text: ''
    }

    handleSubmit = ev => {
        ev.preventDefault();
        console.log(this.state)
        this.props.onAddPost(this.state)
        this.setState({
            title: '',
            text: ''
        })
    }

    handleChange = type => ev => {
        const {value} = ev.target;
        this.setState({ [type]: value });
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                title: <input value = {this.state.title}
                             onChange = {this.handleChange('title')} />
                text: <input value = {this.state.text}
                                onChange = {this.handleChange('text')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }
}

export default connect(null, {onAddPost})(PostForm)