import { Authenticator, View, useTheme } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import { fetchUserAttributes } from "aws-amplify/auth";

const comp = {
  Header() {
    const {tokens } = useTheme();

    return(
      <View textAlign={"center"} padding={tokens.space.large}>
        <text style={{fontSize: 20}}>
          DoLearn
        </text>

      </View>

    )
  }
  

}

function App() {
  
  return (
    <Authenticator components={comp}>
      <main>
      <text>
        Hello {fetchUserAttributes.name}
      </text>
      </main>
    </Authenticator>
  );
}

export default App;
