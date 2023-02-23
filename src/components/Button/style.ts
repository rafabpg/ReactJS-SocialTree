import styled from "styled-components";



export const ButtonLink = styled.a`
    text-decoration:none;
    border:2px solid var(--purple-use);
    padding:.7rem 0;
    text-align:center;
    width:324px;
    border-radius:4px;
    transition:all .5s  ease-in-out;
    color:var(--purple-use);
    font-size:1rem;
    font-weight:700;
    &:hover{
        background-color:var(--purple-use);
        color:var(--white-page);
    }
`;