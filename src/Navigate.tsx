
import { Button, Flex, View, withAuthenticator } from '@aws-amplify/ui-react';
import "./Navigate.css"
import { Link } from "react-router-dom"
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';





export function Navigate() {

    const [userAttributes, setUserAttributes] = useState("");

    useEffect(() => {
        const GetAttributes = async () => {
            try {
                const userAttr = await fetchUserAttributes();
                setUserAttributes(userAttr.email!.toUpperCase)
            } catch (error)
            {
                setUserAttributes("nope" + error)
            }
      

        }
        GetAttributes();
        

    })



    

    return(

    <div id="NavBar" className='NavBar'>
        <View className='View' as='div'>

        <Flex className="FlexNav" direction={"row"}>
            
            
            <h1>{userAttributes}</h1>

            <Link to={"/doplay"} > <Button className='Button'> DoPlay </Button></Link>

 

            <Link to={"/doplay"}><Button className='Button'>DoPlay</Button></Link>

        </Flex>

        </View>

              
    </div>
       
    )


}

export default withAuthenticator(Navigate)




