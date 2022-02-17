import styled from "styled-components"

export const Container_outer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
export const Container_inner = styled.div`
background-color: #0000;
padding: 4px;
width: 12em;
height: 16em;
border: 1px solid #e4e4e4;
box-shadow: 1px 1px 3px black;
justify-content: center;
margin: 8px;
`
export const Image = styled.img`
width: 9em;
height: 9em;
margin-bottom: 1em;
`
export const H5 = styled.h5`
font-weight: 700;
margin-left: 10px;
`
export const Text = styled.div`
${(props) =>
    props.theme.theme === "light"
    ? `
    color: #000;
    `
    : `
    color: #eee;
    `}
`;