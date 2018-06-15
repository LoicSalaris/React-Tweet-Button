import React from 'react';

class Twitter extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (evt) => {
    console.log(evt);
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 300) {
      this.loadTwitter();
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  loadTwitter = () => {
    /* eslint-disable */
    window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));
    /* eslint-enable */
  };

  render() {
    return (
      <div className="twitter">
        <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet"
        >
          Tweet
        </a>
      </div>
    );
  }
}

export default Twitter;
