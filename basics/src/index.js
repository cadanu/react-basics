import { buildQueries } from '@testing-library/react';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React from'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(<App/>, document.getElementById('root'));
