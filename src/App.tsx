import { Authenticator, Flex, View, useTheme } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import "./App.css"
import { Schema } from '../amplify/data/resource';
import { useState, useEffect } from "react";



const comp = {
  Header() {
    const {tokens } = useTheme();

    return(
      
        <View textAlign={"center"} padding={tokens.space.large}>
          <Flex justifyContent={"center"} alignContent={"center"}>
            <text>test2</text>
            <button className="top-button" onClick={() => open("http://google.com")}>
              Test
            </button>
            <text> test </text>
          </Flex>
        </View>

    )
    
  },


}

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
