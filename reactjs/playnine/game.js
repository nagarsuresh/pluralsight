var StarsFrame = React.createClass({

    render: function () {

        var stars = [];
        for (var i = 0; i < this.props.numberOfStars; i++) {
            stars.push(
                <span className="glyphicon glyphicon-star"/>
            )
        }


        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        )
    }
});



var ButtonFrame = React.createClass({
    render: function () {
        var disabled = this.props.selectedNumbers.length === 0;
        return (
            <div id="button-frame">
                <button className="btn btn-primary btn-lg" disabled={disabled}>=</button>
            </div>
        )
    }
});



var AnswerFrame = React.createClass({
    render: function () {
        var me = this;
        var numbers = this.props.selectedNumbers.map(function (number) {
            return (
                <div className="number" onClick={me.props.deselectHandler.bind(null, number) }>{number}</div>
            );
        })


        return (
            <div id="answer-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        )
    }
});




var NumbersFrame = React.createClass({

    render: function () {
        var numbers = [];
        for (var i = 1; i <= 9; i++) {
            var className = "number selected-" + ((this.props.selectedNumbers.indexOf(i) >= 0) ? 'true' : 'false');
            numbers.push(
                <div className={className} onClick={this.props.selectHandler.bind(null, i) }>{i}</div>
            )
        }
        return (
            <div id="numbers-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        )
    }
});


var Game = React.createClass({

    getInitialState: function () {
        return {
            numberOfStars: Math.floor(Math.random() * 9) + 1,
            selectedNumbers: []
        }
    },

    selectHandler: function (number) {
        if (this.state.selectedNumbers.indexOf(number) < 0) {
            this.state.selectedNumbers.push(number)
            this.setState({
                selectedNumbers: this.state.selectedNumbers
            });
        }
    },

    deselectHandler: function (number) {
        var selectedNumbers = this.state.selectedNumbers;
        var indexOf = selectedNumbers.indexOf(number);
        selectedNumbers.splice(indexOf, 1);
        this.setState({
            selectedNumbers: selectedNumbers
        });
    },

    render: function () {
        var selectedNumbers = this.state.selectedNumbers;
        var numberOfStars = this.state.numberOfStars;
        return (
            <div id="game_container">
                <h1>Play Nine</h1>
                <hr/>
                <div className="clearfix">
                    <StarsFrame numberOfStars={numberOfStars}/>
                    <ButtonFrame selectedNumbers={selectedNumbers}/>
                    <AnswerFrame selectedNumbers={selectedNumbers} deselectHandler={this.deselectHandler}/>
                </div>

                <NumbersFrame selectedNumbers={selectedNumbers} selectHandler={this.selectHandler}/>

            </div>
        );
    }
});


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);