
import { Button, Flex, withAuthenticator } from '@aws-amplify/ui-react';
import "./Navigate.css"
import { Link } from "react-router-dom"

function Navigate() {

    return(

    <div id="NavBar">
        <Flex className="FlexNav" direction={"column"}>
            

            <Link to={"/doplay"}> <Button> but </Button></Link>

 

            <Button className="Button">
                DoPlay
            </Button>
        </Flex>      
    </div>
       
    )


}

export default withAuthenticator(Navigate)




