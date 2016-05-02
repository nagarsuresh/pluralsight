var Card = React.createClass({

    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {
        var me = this;
        $.get('https://api.github.com/users/' + this.props.login, function (data) {
            me.setState(data);
        }).fail(function () {
            me.props.onFail('Could not fetch data from Github');
        });
    },

    render: function () {
        return (
            <div>
                <img src = {this.state.avatar_url} width="120"/>
                <h3>{this.state.name}</h3>
                <hr/>
            </div>
        )
    }
});

var Form = React.createClass({

    addCard: function (event) {
        event.preventDefault();
        
        this.props.clearMsg();

        this.props.addCard(this.refs.loginName.value);
        this.refs.loginName.value = '';
    },

    render: function () {
        return (
            <form onSubmit={this.addCard} className="form-inline">
                <div className="form-group">
                    <label>Enter a Github login name: </label>
                    <input type="text" ref = "loginName" placeholder="Github login name" className="form-control" required/>
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
        );
    }
});


var Main = React.createClass({

    getInitialState: function () {
        return {
            cards: [],
            msg: ''
        }
    },

    addCard: function (cardLoginName) {
        this.state.cards.push(cardLoginName);
        this.setState({ cards: this.state.cards });
    },

    setMessage: function (msg) {
        this.setState({
            msg: msg
        });
    },

    clearMsg: function () {
        this.setState({
            msg: ''
        });
    },

    render: function () {
        var me = this;
        var cards = this.state.cards.map(function (login) {
            return (<Card login={login} onFail={me.setMessage}/>);
        });
        return (
            <div>
                <p className="bg-danger">{this.state.msg}</p>
                <Form addCard={this.addCard} clearMsg={me.clearMsg}/>
                {cards}
            </div>
        );
    }
});



ReactDOM.render(<Main/>, document.getElementById("root"));