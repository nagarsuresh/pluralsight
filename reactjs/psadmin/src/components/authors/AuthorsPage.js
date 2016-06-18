"use strict";

var React = require('react');
var AuthorApi = require('../../api/AuthorApi.js');
var AuthorList = require('./AuthorList.js');
var Router = require('react-router');
var Link = Router.Link;

var AuthorsPage = React.createClass({

    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentWillMount: function () {
        this.setState({
            authors: AuthorApi.getAllAuthors()
        });
    },

    render: function () {

        var createAuthorsRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <h1>Authors List</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorsPage;
