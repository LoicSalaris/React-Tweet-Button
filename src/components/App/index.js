import React from 'react';
// import sanitizeHtml from 'sanitize-html-react';

import Twitter from '~/components/Twitter';
import post from '~/data/post';

import './app.styl';

const App = () => (
  <div className="app">
    {/* <article className="app">
      {post}
    </article> */}
    <article
      className="app-article"
      dangerouslySetInnerHTML={{
        // __html: sanitizeHtml(post),
        __html: post,
      }}
    />
    <Twitter />
  </div>
);

export default App;
