Search = React.createClass({
  getInitialState() {
    return {
      searchTerm = ''
    };
  },

  handleChange: function(e) {
    var searchTerm = e.target.value;
    this.setState({
      searchTerm: searchTerm
    });

    if (searchTerm.length > 2) {
      this.props.onSearch(searchTerm);
    }
  },
  
  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.props.onSearch(this.state.searchTerm);
    }
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
      onKeyUp={this.onKeyUp}
      placeholder='What are you search for'
      style={styles}
      value={this.state.searchTerm}
      />
  },
})