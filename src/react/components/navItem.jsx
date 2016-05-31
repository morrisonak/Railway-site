var React = require('react');

var NavItem = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired,
    onNavItemSelected: React.PropTypes.func.isRequired,
    selectedNavItem: React.PropTypes.string.isRequired
  },
  hanldeClick: function(e) {
    e.preventDefault();
    this.props.onNavItemSelected(this.props.content);
  },

  render: function() {
    var status = 'inactive';
    if (this.props.content === this.props.selectedNavItem) {
      status = 'active';
    }

    var cssClass = 'navItem noSelect hvr-bounce-in ' + status;

    return (
      <div className={cssClass} onClick={this.hanldeClick}>
        {this.props.content}
      </div>
    );
  }
});

module.exports = NavItem;
