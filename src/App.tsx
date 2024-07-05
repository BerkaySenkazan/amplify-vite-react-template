import { withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import "./App.css"
import Navigate from './Navigate';






function App() {

  return (

    <div>
          <Navigate/ >
    </div>


  );
}

export default withAuthenticator(App);
