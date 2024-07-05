import { Flex, withAuthenticator, Text } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';


function DoRead(){

    const [html, setHtml] = useState("");

    useEffect(() => {
        async function getHtml()  {
            await ((await fetch("./TestGame.html")).text().then(res => setHtml(res)))
    
        }
        getHtml();

    })
    


    return(
        <Flex position={'fixed'} width={"100%"} height={"100%"} direction={"column"} gap={"0"} backgroundColor={"black"}>
            <iframe srcDoc={html} height={"100%"} width={"100%"} />
            <Text textAlign={'center'} padding={"0"} color={'white'}>Berkay Şenkazan</Text>
            <Text textAlign={'center'} padding={"0"} color={'white'}>2023 - 05 - 07</Text>
        </Flex>
        
        

    )


    
}

export default withAuthenticator(DoRead)

