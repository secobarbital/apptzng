var React = require('react');
var Link = require('react-router').Link;
var Swipeable = require('react-swipeable');
var data = require('../restaurants.json');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            restoIdx: 0
        };
    },
    render: function() {
        var resto = data.restaurants[this.state.restoIdx];
        return <div>
            <h2>Homepage</h2>
            <Swipeable onSwiped={this.swiped} onSwipingRight={this.swipingRight} onSwipingLeft={this.swipingLeft}>
                <img src={resto.image_url} />
                <h3>{resto.name}</h3>
            </Swipeable>
            <p>This is the new homepage.</p>
            <p>Try to go to a todo list page:</p>
            <ul>
                <li><Link to="todolist" params={{list: "mylist"}}>mylist</Link></li>
                <li><Link to="todolist" params={{list: "otherlist"}}>otherlist</Link></li>
            </ul>
            <p>Or try to switch to <Link to="some-page">some page</Link>.</p>
        </div>;
    },
    next: function() {
        console.log('next', arguments);
        this.setState({ restoIdx: (this.state.restoIdx+1) % data.restaurants.length });
    },
    swiped: function(e, x, y, isFlick) {
      e.target.style.transform = 'translate(0px,0px)';
      if (isFlick) {
        this.next();
      }
    },
    swipingLeft: function(e, delta) {
      e.target.style.transform = 'translate(-' + delta + 'px,0px)';
    },
    swipingRight: function(e, delta) {
      e.target.style.transform = 'translate(' + delta + 'px,0px)';
    }
});
