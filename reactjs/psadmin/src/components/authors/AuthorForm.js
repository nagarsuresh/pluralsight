"use strict";

var React = require('react');
var TextInput = require('../common/TextInput');

var AuthorForm = React.createClass({

    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },


    render: function () {
        return (
            <div className="container-fluid">
                <form className="form">
                    <h1>Manage Author</h1>
                    <TextInput
                        name="firstName"
                        label = "First Name"
                        value={this.props.author.firstName}
                        onChange={this.props.onChange}
                        error={this.props.errors.firstName}/>
                    <TextInput
                        name="lastName"
                        label = "Last Name"
                        value={this.props.author.lastName}
                        onChange={this.props.onChange}
                        error={this.props.errors.lastName}/>

                    <div className="input-group input-group-lg">
                        <input type="submit"
                            value="Submit"
                            className="btn btn-primary form-control"
                            onClick={this.props.onSave}/>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm;