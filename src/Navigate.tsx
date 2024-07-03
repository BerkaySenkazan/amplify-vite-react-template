
import { Button, Flex, View, withAuthenticator, Text } from '@aws-amplify/ui-react';
import "./Navigate.css"
import { Link } from "react-router-dom"
import { GetSelfUserInformation } from './GetUserInfo';
import { InfoBar } from './UserInfoBar';








export function Navigate() {


    const Email = GetSelfUserInformation
    

    return(

    <div id="NavBar" className='NavBar'>
        <Flex direction={"column"} alignItems={'center'} gap={"10px"} justifyContent={"space-evenly"}>
        <View className='NavBarBackground' as='div'>

        <Flex className="FlexNav" direction={"row"} alignContent={"start"}>
            <Email name={"Person"}/>
        </Flex>

        </View>
        <Text marginBottom={"3px"} marginTop={"80px"} fontSize={"20px"} fontFamily={"sans-serif"} alignSelf={"center"}>My Applications</Text>
        <div>
            <View className='BodyBackground' as = "div" margin={"0px"}>
                <Link to={"/doplay"} > <Button className='Button'> DoPlay </Button></Link>
                <Link to={"/doplay"}><Button className='Button'>DoPlay</Button></Link>
            </View>

        </div>
        <Text marginTop={"80px"} marginBottom={"3px"} fontSize={"20px"} fontFamily={"sans-serif"} alignSelf={"center"}>My Information</Text>
              <div>
                <Flex direction={"column"} margin={"2vw"} gap={"2vw"} alignItems={"center"}>
                    <InfoBar infoName='Test' infoValue='TestValue' />
                    <InfoBar infoName='Test2' infoValue='TestValue' />

                </Flex>
              </div>
        </Flex>

        

              
    </div>
       
    )


}

export default withAuthenticator(Navigate)




