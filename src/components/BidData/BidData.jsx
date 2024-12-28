import styled from "styled-components";

const Backdrop = styled.div`
    z-index: 10;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    position: fixed;
    height: 100%;
    font-family: Verdana;
`;
const BidData = styled.section`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 15;
    background-color: #fff;
    border-radius: 10px;
    width: 700px;
    height: 820px;
    padding: 40px;
`;
const ProductName = styled.h2`
    font-size: 30px;
    font-weight: 400;
    color: #011936;
    line-height: 1.2;
    font-family: "Yeseva One";
`;
const TimeBid = styled.p`
    color: #43607C;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    margin-top: 10px;
`;
const CloseModal = styled.button`
    position: absolute;
    top: 40px;
    right: 40px;
    background-color: transparent;
    width: 30px;
    height: 30px;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #84A6C2;
`;
const ProductDatas = styled.ul`
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;
const Line = styled.div`
    margin: 20px 0;
    width: 620px;
    height: 1px;
    background: #DFDFDF;
`;
const ProductData = styled.ul`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    width: 620px;
    flex-wrap: wrap;
    position: relative;
`;
const DataLabel = styled.li`
    width: 220px;
    padding: 10.5px 0;
    color: #43607C;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    display: flex;
    align-items: center;
`;
const DataInfo = styled.li`
    width: 360px;
    color: #43607C;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    &>p{
        padding: 10px 0 10px 20px;
        background: #F9F9F9;
        border-radius: 20px;
        width: 100%;
    }
    display: flex;
    align-items: center;
    &[data-weight]{
        width: 330px;
    }
    &>ul{
        display: flex;
        align-items: center;
        gap: 5px;
        &>li{
            padding: 10px 20px;
            border-radius: 50px;
            height: 40px;
            background: #F9F9F9;
        }
    }
`;
const DataUnit = styled.li`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    height: 100%;
    line-height: 1.2;
    color: #011936;
    position: absolute;
    right: 0;
`;
const DontCall = styled.li`
    position: absolute;
    top: 40px;
    display: flex;
    gap: 10px;
    height: 40px;
    padding: 2px 10px;
    align-items: center;
    justify-content: center;
    color: #A63A50;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2; 
    &>img{
        width: 20px;
        height: 20px;
    }
`;
const WrtieConfecioner = styled.button`
    margin-top: 40px;
    height: 40px;
    width: 620px;
    border-radius: 50px;
    background-color: #A63A50;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    line-height: 1.2;
    font-size: 18px;
    color: #fff;
`;
const AddResponse = styled.button`
    margin-top: 10px;
    height: 40px;
    width: 620px;
    border-radius: 50px;
    border: 1px solid #84A6C2;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    line-height: 1.2;
    font-size: 16px;
    color: #43607C;
`;

export default ({ productName, time, nameAndSurname, mobilePhone, Weight, filling, additionalServices, additionalWish, isCall, closeModal }) => <>
    <Backdrop>
        <BidData>
            <CloseModal onClick={() => closeModal()}>X</CloseModal>
            <ProductName>{productName}</ProductName>
            <TimeBid>{time}</TimeBid>
            <ProductDatas>
                <li>
                    <ProductData>
                        <DataLabel><p>Ім’я та прізвище</p></DataLabel>
                        <DataInfo><p>{nameAndSurname}</p></DataInfo>
                    </ProductData>
                </li>
                <li>
                    <ProductData>
                        <DataLabel><p>Номер телефону</p></DataLabel>
                        <DataInfo><p>{mobilePhone}</p></DataInfo>
                    </ProductData>
                </li>
                <li>
                    <Line></Line>
                </li>
                <li>
                    <ProductData>
                        <DataLabel><p>Вага</p></DataLabel>
                        <DataInfo data-weight><p>{Weight}</p></DataInfo>
                        <DataUnit><p>кг</p></DataUnit>
                    </ProductData>
                </li>
                <li>
                    <ProductData>
                        <DataLabel><p>Начинка</p></DataLabel>
                        <DataInfo><p>{filling}</p></DataInfo>
                    </ProductData>
                </li>
                <li>
                    <ProductData>
                        <DataLabel><p>Додаткові послуги</p></DataLabel>
                        <DataInfo><ul>{additionalServices.map(additionalService => <li>
                            <p>{additionalService}</p>
                        </li>)}</ul></DataInfo>
                    </ProductData>
                </li>
                <li>
                    <ProductData>
                        <DataLabel><p>Додаткові побажання</p></DataLabel>
                        <DataInfo><p>{additionalWish}</p></DataInfo>
                        {isCall && <DontCall>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                <path d="M8.99984 0.166992C4.39984 0.166992 0.666504 3.90033 0.666504 8.50033C0.666504 13.1003 4.39984 16.8337 8.99984 16.8337C13.5998 16.8337 17.3332 13.1003 17.3332 8.50033C17.3332 3.90033 13.5998 0.166992 8.99984 0.166992ZM7.33317 12.667L3.1665 8.50033L4.3415 7.32533L7.33317 10.3087L13.6582 3.98366L14.8332 5.16699L7.33317 12.667Z" fill="#A63A50"/>
                            </svg>
                            <p>Не телефонуйте мені</p>
                        </DontCall>}
                    </ProductData>
                </li>
            </ProductDatas>
            <WrtieConfecioner>Написати кондитеру</WrtieConfecioner>
            <AddResponse>Додати відгук</AddResponse>
        </BidData>
    </Backdrop>
</>