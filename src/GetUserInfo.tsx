import { useEffect, useState } from "react";
import { fetchUserAttributes, signOut } from "aws-amplify/auth";
import { Button, Flex, Text } from "@aws-amplify/ui-react";





export function GetSelfUserInformation(props: {name: String}) {

    
    const [userEmail, setUserEmail] = useState(String);
    const [userName, setUserName] = useState(String);

    

    useEffect(() => {
        
        async function GetAttributes() {
            try {
                const userAttr = await fetchUserAttributes();
                setUserEmail(userAttr.email || "")
                setUserName(userAttr.name || "")
            } catch (error)
            {
                setUserEmail("nope" + error)
                
            }
            
            

        }
        GetAttributes();
        
        

    })

    return(
        <Flex direction={"column"} alignContent={"center"} gap={"0px"} textAlign={"center"} margin={"1px"} alignItems={"center"}>
            <Text>Welcome! {userName ? userName: props.name} </Text>
            <Button onClick={() => signOut()} 
            height={"30px"}
            backgroundColor={"red.60"}
            color={"white"}> signout {userEmail} </Button>
        </Flex>

    )

}
