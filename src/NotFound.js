import styled from "styled-components";
export const Text = styled.div`
color: red;
margin:150px;
justify-content: center;
`

export default function NotFound() {
    return <Text>Sorry, that page couldn't be found.</Text>;
}
