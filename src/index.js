import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.querySelector('#root'));
