import styled from "styled-components";


export const ProfileImage = styled.img`
    width:200px;
    height:200px;
    box-shadow:
    0 0 0 3px var(--white-page),
    0 0 0 5px var(--purple-use);
    border-radius:50%;
`;

export const ProfileContainer = styled.figure`
    text-align:center;
    padding:1rem;
    color:var(--purple-use);

    figcaption{
        padding:1rem;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    gap:.7rem;
    justify-content:center;
    align-items:center;
    margin:4rem;
`;