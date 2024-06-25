import { Authenticator, Flex, View, useTheme } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import outputs from "../amplify_outputs.json"


const comp = {
  Header() {
    const {tokens } = useTheme();

    return(
      
        <View textAlign={"center"} padding={tokens.space.large}>
          <Flex justifyContent={"center"} alignContent={"center"}>
            <text>test2</text>
            <text> test </text>
          </Flex>
          
          


        </View>

      

  

    )
    
  },
  
  Footer() {

    const { tokens} = useTheme();

    return (
      <View textAlign={"center"} padding={tokens.space.large}>
        <text>
          test
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
        Hello 
      </text>
      </main>
    </Authenticator>
  );
}

export default App;
