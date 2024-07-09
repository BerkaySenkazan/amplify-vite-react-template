import { Flex, withAuthenticator, Text } from '@aws-amplify/ui-react';


function DoRead(){


   

    return(
        <Flex position={'fixed'} width={"100%"} height={"100%"} direction={"column"} gap={"0"} backgroundColor={"white"}>
            <iframe src='https://gamehtmls-2024-07-04.s3.us-east-1.amazonaws.com/Brokered%20%282%29.html?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaDGV1LWNlbnRyYWwtMSJHMEUCIQDJLOuyvtR3YJioE77DUl43pftrdOCizMDl9YHyxdgfTAIgFmj9mCnFDFO39gvaBYVAO7q%2Boj46HYbl49wLSYhHzGIq5AIIKRAAGgw3MzAzMzUzMTgwOTIiDA9Bbcft7E4eIXBFgSrBAo3wXgf1%2BhX8I9NCTEygeTC2ooPG%2BQ%2BME6C2tBVQ7kuJd9dU2Mc1lViCLHI6SCazvRc8rIexQ9hsySY4k6kaB3z%2B%2BDV41pRzkLDWQw3Gzb7fopfnzGh4RQ7%2FIB0jBLmIcY5WlV85ZtULLuWkx1h2blDuIoX4ufG1w6KcI6tNcCglPOom2siv6pLIPJ9DxvXtlL9EX%2FetHbjUOGAIqhu9vk9KSG2xKgGGs7ryLELQiZXatn%2B5AR65ekPdCHcklj2%2B8dstIFl0O4GsbvlQn1DOoe5k7jNNeh2zd7tCXUS%2BWKRL9phS2kKlaP1YDMnxZZCzYlZioGANYdNwQ7tbeAR%2Fef0DMjANdstKoaMxYRQHOxHQc39%2FIsPhuqAF1lf6snMk2UT611L9ZCYCTPeR92492TQbB%2F0MHm%2BPyFxn6wV9QeOKyTCV0LO0BjqzAnXJjFXi1d43rJmPTzkFjvrJ7Foe%2BJoimPoQXNdlpmVxqzkGYZTx9SBXhGcmlpB5HgrOUuP8ips4EdEJr69KY4bbQMBvkfUsHtNfQCMI7%2FdyphT87Bda9XnpceUesWcdzyJRdANdW39ApeNBpe7833V%2Ff5KYYHHBK%2FZNxsHijeZl1mLeu9jButdAjd8tSWK6b%2BfaBIPkpW8aEYiJVAaaZh1IhMKNy858X4BX1BTtDUVp07xCFyOF6ErQB6vm2G5%2B4zKY2fyTnNC3mXraA5qXUsBSkAPbgDh92aRBQB%2FOlGuWtZaz7IFJUufUkKWGCPkHv5NEHJgXokV6lRRPvCxprjhFHnnIPk5HJhL6mOZccR%2B303OU%2FbEX7VXw2bBoJX0D%2FwBhIsujbTcopxnXsHFyiw7mbgA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T074032Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2UC3ASBGJGERNDNG%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d46e4f65d7802398793ce3ef3f66963ceb9306de2ddfd1c6a004b4e71a26ab3c' />
            <Text textAlign={'center'} padding={"0"} color={'white'}>Berkay Şenkazan</Text>
            <Text textAlign={'center'} padding={"0"} color={'white'}>2023 - 05 - 07</Text>
            <Text>Test</Text>
        </Flex>
        
        

    )


    
}

export default withAuthenticator(DoRead)

