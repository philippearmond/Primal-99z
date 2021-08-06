import { Route, Switch } from 'react-router-dom';

import Donate from '../NavComponents/Donate/Donate';
import News from '../NavComponents/News/News'; //criar um arquivo só com todos imports e importar tudo dentro dele, dps importar aqui
import Register from '../../containers/Register/Register';
import PasswordRecover from '../../components/PasswordRecover/PasswordRecover';
import Info from '../NavComponents/Info/Info';
import Downloads from '../NavComponents/Downloads/Downloads';
import Primal from '../NavComponents/Primal/Primal';
import FreeCredits from '../NavComponents/FreeCredits/FreeCredits';
import Events from '../NavComponents/Events/Events';
import Cmd from '../NavComponents/Cmd/Cmd';
import Rules from '../NavComponents/Rules/Rules';
import Team from '../NavComponents/Team/Team';
import Rankings from '../NavComponents/Rankings/Rankings';
import ChangePassword from '../../containers/Profile/ChangePassword'; //RETIRARRRRRRRRRR

const Main = () => (
    //vou precisar alinhar esse layout com flex-basis e definir como centralizado, para que seja ajustavel com a tela!
    //e tb, definir a width da img como 70% ou + dependendo do tamanho dela e do layout q quero!

    <main style={{ flexBasis: '75%', textAlign: 'center' }}>
        <Switch>
            <Route path={'/deletar'} component={ChangePassword} />

            <Route path={'/rankings'} component={Rankings} />
            <Route path={'/time'} component={Team} />
            <Route path={'/regras'} component={Rules} />
            <Route path={'/cmd'} component={Cmd} />
            <Route path={'/eventos'} component={Events} />
            <Route path={'/creditos'} component={FreeCredits} />
            <Route path={'/primal'} component={Primal} />
            <Route path={'/downloads'} component={Downloads} />
            <Route path={'/info'} component={Info} />
            <Route path={'/recuperar-senha'} component={PasswordRecover} />
            <Route path={'/cadastrar'} component={Register} />
            <Route path={'/doar'} component={Donate} />
            <Route path={'/'} component={News} />
        </Switch>
    </main>
);

export default Main;
