/* eslint-disable no-new */
// import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

import { Menu } from './components/menu/menu';
// Import { Tasks } from './components/tasks/tasks';
import './index.scss';
// Import { TaskApiRepo } from './services/repository/task.api.repo';

new Header('#root');
new Menu('.header');

// If (location.pathname === '/home') {
//   new Tasks('main', new TaskApiRepo());
// }

// new Footer('#root');
