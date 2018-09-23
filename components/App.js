App = React.createClass({
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
        <Search />
        <Gif />
      </div>
    );
  }
});
