import React from "react";
import storeItems from "../../data/items.json";
import {Row, Col} from "react-bootstrap";
import { StoreItems } from "../../components/storeItmes";

const Store = () => {
    return (
        <>
        <h1>
            Store
        </h1>
        <Row className="g-3" md ={2} xs={1} lg={3}>
            {storeItems.map(item => (
                <Col>
                <StoreItems {...item} />
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Store;