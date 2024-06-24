import { Authenticator, View, useTheme } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'

const comp = {
  Header() {
    const {tokens } = useTheme();

    return(
      <View textAlign={"center"} padding={tokens.space.large}>
        <text style={{fontSize: 80}}>
          Alparslan'ın götünün içi
        </text>

      </View>

    )
  }
  

}

function App() {
  
  return (
    <Authenticator components={comp}>
      <main>

      </main>
    </Authenticator>
  );
}

export default App;
