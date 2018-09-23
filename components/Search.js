Search = React.createClass({
  getInitialState() {
    return {
      searchTerm = ''
    };
  },

  handleChange: function(e) {
    var searchTerm = e.target.value;
    this.setState({
      searchTerm: searchTerm;
    });
  },

  render: function() {
    var styles = {
      fontSize: '1.5em',
      width: '90%',
      maxWidth: '350px'
    };
    
    return <input
      type='text'
      onChange={this.handleChange}
      placeholder='What are you search for'
      style={styles}
      value={this.state.searchTerm}
      />
  }
})