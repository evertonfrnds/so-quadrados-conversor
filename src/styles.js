import styled from 'styled-components'

export const Container = styled.div`
    width: 60%;
    flex: 1;
    padding: 5px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    background-color: white;
    @media only screen and (max-width:800px) {
        width: 80%;
    }
    @media only screen and (max-width:500px) {
        width: 90%;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 3px;
    background-color: white;
`;

export const Header = styled.div`
    color: white;
    font-weight: bold;
    font-size: 32px;
    margin: 25px 0;
    @media only screen and (max-width:800px) {
        font-size: 26px;
    }
`;

export const Footer = styled.div`
    margin: 20px 0 ;
    width: 60%;
    height: 30px;
    padding: 5px;
    background-color: white;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    @media only screen and (max-width:800px) {
        width: 80%;
    }
    @media only screen and (max-width:500px) {
        width: 90%;
    }
`;

export const InputContainer = styled.div`
    
`;