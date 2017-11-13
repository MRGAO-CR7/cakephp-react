import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import CommentList from './comment.list.jsx';

class ChatIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            comments: [],
        };

    }
    componentDidMount() {
        this.fetchComments();
        document.title = 'Demo';
    }
    status (response) {
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }
    json (response) {
        return response.json();
    }

    fetchComments() {
        this.setState({loading: true});

        let url = '/reactfront/comments.json';

        fetch(url, {
            credentials: 'include',
        })
            .then(this.status)
            .then(this.json)
            .then(function(response){
                this.setState({
                    loading: false,
                    comments: response.comments,
                });console.log(this.state.comments);
            }.bind(this))
            .catch(function(error) {
                this.setState({
                    loading: false,
                    comments: [],
                });
                console.log('Request failed', error);
            }.bind(this));
    }
    render() {
        return (
            <div className="chatIndex">
                <h1>Comments</h1>
                <CommentList data={this.state.comments} />
                {/* <CommentForm onCommentSubmit={this.handleCommentSubmit} /> */}
            </div>
        );
    }
}

export default ChatIndex;
