import html from 'choo/html';

import ChildrenExample from './children/ChildrenExample';

export default (state, emit) => (
  html`
    <body>
      <div>
        ${ChildrenExample()}
      </div>
    </body>
  `
);
