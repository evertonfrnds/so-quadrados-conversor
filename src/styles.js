import styled from 'styled-components'


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
export const Container = styled.div`
    width: 60%;
    flex: 1;
    padding: 5px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    background-color: white;
    display: flex;
    
    @media only screen and (min-width:900px) {
        align-items: center;
        justify-content: space-around
    }
    @media only screen and (max-width:800px) {
        width: 80%;
        flex-direction: column;
    }
    @media only screen and (max-width:500px) {
        width: 90%;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    padding: 10px 5px;
    border: 2px solid lightgreen;
    height: 350px;
    margin: 10px;
    flex: 1;
    @media only screen and (max-width:800px) {
        flex: 1;
    }
`;

export const ResultContainer = styled.div`
    display: flex;
    border: 2px solid lightblue;
    padding: 10px 5px;
    height: 350px;
    margin: 10px;
    flex: 1;
    @media only screen and (max-width:800px) {
        flex: 1;
    }
    position: relative;
`;

export const Input = styled.textarea`
    flex: 1;
    border: 0;
    font-size:18px;
    resize: none;
    font-weight: 500;
`;

export const ResultArea = styled.textarea`
    font-size:18px;
    font-weight: 500;
    flex: 1;
    border: 0;
    resize: none;
`;

export const LabelCopy = styled.button`
    position: absolute;
    z-index: 2;
    right:0;
    bottom: 0;
    margin: 0 5px 5px 0;
`;