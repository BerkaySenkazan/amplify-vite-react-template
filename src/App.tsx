import { Authenticator, Flex, View } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import "./App.css"

function App() {
  
  return (

    <Flex direction={"column"} justifyContent={"flex-start"}>
          <Authenticator>
          </Authenticator>
          <View className="bottomBar">
          red
          </View>

    </Flex>


  );
}

export default App;
