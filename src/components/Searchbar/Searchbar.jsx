import styled from "styled-components";

const Searchbar = styled.div`
    display: flex;
    margin: 40px 0px;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    input {
        width: 1300px;
        height: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        font-family: "Roboto";
        font-size: 18px;
        font-weight: 400;
        line-height: 1.33;
        border-radius: 5px 0px 0px 5px;
        border: 1px solid #dfdfdf;
        &::placeholder {
            color: #c2c2c2;
        }
    }
    button {
        width: 132px;
        height: 100%;
        border-radius: 0px 5px 5px 0px;
        border: 1px solid #fdad6d;
        background: #fdad6d;
        padding: 5px 30px;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        color: #8e4a4e;
        font-family: "Roboto";
        font-size: 18px;
        font-weight: 400;
        line-height: 1.2;
        cursor: pointer;
        &:hover {
            background: #de9960;
        }
    }
`;

export default ({ placeholder }) => <>
    <Searchbar>
        <input type="text" placeholder={placeholder} />
        <button type="button">Шукати</button>
    </Searchbar>
</>;