import { Authenticator, Button, Flex, Icon, View } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import "./App.css"
import type { Schema } from "../amplify/data/resource"
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";

const client = generateClient<Schema>();

function App() {
  const [datas, setDatas] = useState<Schema["UserInfo"]["type"][]>([])

  const fetchData = async () => {
    const {data: items} = await client.models.UserInfo.list()
    setDatas(items);

  };

  useEffect(() => {
    fetchData();
  })

  return (

    <Flex direction={"column"} justifyContent={"flex-start"}>
          <Authenticator>
          </Authenticator>
          <Button onClick={fetchData}>
            <Icon></Icon>
            Fetch Thing
          </Button>
          <View className="bottomBar">

            {datas.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}


          </View>

    </Flex>


  );
}

export default App;
