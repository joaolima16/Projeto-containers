import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './style.js'
import { BtnContainer, Card, CardWrapper, TitleContainer, TypeContainer } from './style.js'

export default function Cards() {
    const [Data, SetData] = useState([]);
    const dispatch = useDispatch();

    const GetItems = () => {
        axios.get("http://localhost:3500/Container")
            .then(async (response) => SetData(response.data));

    }

    const SaveIndex = (Value) =>{
    dispatch({type:"ADD_INDEX",data:Value})
       
    }
    useEffect(() => {
        GetItems();
    }, [])
    return (
        <>
         <Row xs={1} sm={3}>
                        {Data.map((index) => {
                            return (
                                <CardWrapper>
                                    <Col>
                                        <Card>
                                            <TitleContainer>
                                            Number:{index.Container}
                                            </TitleContainer>
                                            <TypeContainer>
                                                Type: {index.Type}
                                            </TypeContainer>
                                            <BtnContainer  onClick={()=>SaveIndex(index.Id)}>
                                            Details
                                            </BtnContainer>
                                        </Card>
                                    </Col>
                                </CardWrapper>
                            )
                        })}
            </Row>
        </>
    )
}
