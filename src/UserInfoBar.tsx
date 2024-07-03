import { Flex, Text } from "@aws-amplify/ui-react";


interface Properties {
    infoName: string;
    infoValue: string;
}

export const InfoBar: React.FC<Properties> = ({infoName, infoValue}) => {

    return(
        <Flex 
        backgroundColor={"blue.40"} 
        gap={"20vw"} 
        direction={"row"} 
        paddingLeft={"1vw"} 
        paddingTop={"0.5vw"} 
        paddingBottom={"0.5vw"} 
        paddingRight={"1vw"}
        >
            <Text color={"white"}>
                {infoName}
            </Text>
            <Text color={"white"}>
                {infoValue}
            </Text>
        </Flex>

    )

}