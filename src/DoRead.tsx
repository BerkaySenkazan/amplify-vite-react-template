import { Flex, withAuthenticator, Text } from '@aws-amplify/ui-react';

function DoRead(){



    return(
        <Flex position={'fixed'} width={"100%"} height={"100%"} direction={"column"} gap={"0"} backgroundColor={"black"}>
            <iframe src='public/TestGame.html' height={"100%"} width={"100%"} />
            <Text textAlign={'center'} padding={"0"} color={'white'}>Berkay Şenkazan</Text>
            <Text textAlign={'center'} padding={"0"} color={'white'}>2023 - 05 - 07</Text>
        </Flex>
        
        

    )


    
}

export default withAuthenticator(DoRead)

