import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const id = await getHash();
    const Character = await getData(id);

    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="${Character.image}" alt="${Character.name}">
            <h2>${Character.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodes: <span>${Character.episode.length}</span> </h3>
            <h3>Status: <span>${Character.status}</span></h3>
            <h3>Species: <span>${Character.species}</span></h3>
            <h3>Gender: <span>${Character.gender}</span></h3>
            <h3>Origin: <span>${Character.origin.name}</span></h3>
            <h3>Last Location: <span>${Character.location.name}</span></h3>
        </article>
    </div>
    <div class="regresar">
        <a class="btn btn-danger"  href="/">Regresar al Home</a>
    </div>`;

    return view;
}

export default Character;