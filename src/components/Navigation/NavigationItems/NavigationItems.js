import { Link } from 'react-router-dom';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = () => {
    const links = {
        ['/']: 'News',
        info: 'Info Server',
        primal: 'Sobre a Primal',
        downloads: 'Downloads',
        cadastrar: 'Registrar',
        creditos: 'Free Credits',
        eventos: 'Eventos',
        cmd: 'Comandos',
        regras: 'Regras',
        doar: 'Doações',
        time: 'Fazer parte da equipe',
        rankings: 'Rankings',
        suporte: 'Suporte', //colocar Btn Unico Pra Ele Em Algum Lugar ou criar uma função e chama-la no render com window.location
    };
    const linkEntries = Object.entries(links);

    const link = linkEntries.map((linkItem) => (
        <Link to={linkItem[0]} exact="true" key={linkItem[0]}>
            <NavigationItem key={linkItem[0]}>{linkItem[1]}</NavigationItem>
        </Link>
    ));

    return <ul>{link}</ul>;
};

export default NavigationItems;
