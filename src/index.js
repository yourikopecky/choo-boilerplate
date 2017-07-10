import choo from 'choo';
import 'spectre.css';

import './theme/example.css';

import Uses from './uses';
import Routes from './routes';

const app = choo();

Uses(app);
Routes(app);
app.mount('body');
