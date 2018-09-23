App = React.createClass({
  getInitialState() {
    return {
      loading: false,
      searchTerm: '',
      gif: {}
    };
  },

  handleSearch: function(searchTerm) {
    this.setState({
      loading: true
    });

    this.getGif(searchTerm, function(gif) {
      this.setState({
        loading: false,
        gif: gif,
        searchTerm: searchTerm
      });
    }.bind(this));
  },

  getGif: function(searchTerm, callback) {
    var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchTerm;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText).data;
        var gif = {
          url: data.fixed_width_downsampled_url,
          sourceUrl: data.url
        };
        callback(gif)
      }
    };
    xhr.send();
  },

  render: function() {
    var styles = {
      margin: '0 auto',
      textAlign: 'center',
      width: '90%'
    };

    return (
      <div style={styles}>
        <h1>GIF search engine</h1>
        <p>
          Find GIF on <a href='http;//giphy.com'>giphy</a>
          To get next gif click Enter
        </p>
        <Search onSearch={this.handleSearch}/>
        <Gif
          loading={this.state.loading}
          url={this.state.gif.url}
          sourceUrl={this.state.gif.sourceUrl}
        />
      </div>
    );
  }
});
