import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Root from "./root";

import 'semantic-ui-css/semantic.min.css';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root/>, document.getElementById('bookshop-app'));
});
