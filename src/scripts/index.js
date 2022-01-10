import 'regenerator-runtime';
import '../styles/main.css';
import './views/components/rest-bar';
import './views/components/rest-ter';
import 'aos/dist/aos.css';
import AOS from 'aos';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

AOS.init({
  once: true,
  duration: 1000,
});

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
