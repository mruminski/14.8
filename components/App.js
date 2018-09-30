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

    this.getGif(searchTerm).then(gif => {
      this.setState({
        loading: false,
        gif: gif,
        searchTerm: searchTerm
      });
    });
  },

  getGif: function(searchTerm) {
    return new Promise(function(resolve, reject) {
      const url =
        GIPHY_API_URL + GIPHY_PUB_KEY + '&tag=' + searchTerm + '&rating=G';
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (this.status === 200) {
          const data = JSON.parse(xhr.responseText).data;
          const gif = {
            url: data.fixed_width_downsampled_url,
            sourceUrl: data.url
          };
          resolve(gif);
        } else {
          reject(Error(xhr.statusText()));
        }
      };
      xhr.send();
    });
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
          Find GIF on <a href='http://giphy.com'>giphy</a>
          To get next gif click Enter
        </p>
        <Search onSearch={this.handleSearch} />
        <Gif
          loading={this.state.loading}
          url={this.state.gif.url}
          sourceUrl={this.state.gif.sourceUrl}
        />
      </div>
    );
  }
});
