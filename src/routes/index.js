import Header from '../template/Header.js';
import Home from '../pages/Home.js';
import Character from '../pages/Character.js';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import About from '../pages/About';

const routes = {
    '/': Home,
    '/:id': Character,
    '/about': About,
};

const router = async ()=> {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");
    debugger
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
};

export default router;