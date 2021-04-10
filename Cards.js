import { Card, Button, Container, Col, Row } from 'react-bootstrap'
const Cards = () => {
    return (
        <>
            <Container fluid >
                <Row className="">
                    <Col lg={3} md={6} className="p-0 mb-5 pl-lg-3 pl-md-5 mr-lg-5 mr-md-5">
                        <Card style={{ width: '18rem' }} className="bg-warning mx-auto">
                            <p className="text-right mr-3 mt-3">4 weeks ago</p>
                            <h4 className="text-white ml-3">
                                Always Do Good Things....
                            </h4>
                            <Card.Body style={{ paddingLeft: "0px" }}>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                            <div className="pl-3 bg-white pt-3">
                                <img className="float-left mt-2 mr-2" style={{ height: "40px", borderRadius: "50%" }} src="https://avatars.githubusercontent.com/u/70422032?s=400&u=4bb7ffbec3079ce1617c3fcc1b20b2cfecf12b6b&v=4" />
                                <h4 className="mb-0">Pilton Brahma</h4>
                                <p>B.Tech Ece II-Year</p>
                            </div>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} className="p-0 mb-5 pl-lg-3 pl-md-5 mr-lg-5 mr-md-5">
                        <Card style={{ width: '18rem' }} className="bg-warning mx-auto">
                            <p className="text-right mr-3 mt-3">4 weeks ago</p>
                            <h4 className="text-white ml-3">
                                Always Do Good Things....
                            </h4>
                            <Card.Body style={{ paddingLeft: "0px" }}>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                            <div className="pl-3 bg-white pt-3">
                                <img className="float-left mt-2 mr-2" style={{ height: "40px", borderRadius: "50%" }} src="https://avatars.githubusercontent.com/u/70422032?s=400&u=4bb7ffbec3079ce1617c3fcc1b20b2cfecf12b6b&v=4" />
                                <h4 className="mb-0">Pilton Brahma</h4>
                                <p>B.Tech Ece II-Year</p>
                            </div>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} className="p-0 mb-5 pl-lg-3 pl-md-5 mr-lg-5 mr-md-5">
                        <Card style={{ width: '18rem' }} className="bg-warning mx-auto">
                            <p className="text-right mr-3 mt-3">4 weeks ago</p>
                            <h4 className="text-white ml-3">
                                Always Do Good Things....
                            </h4>
                            <Card.Body style={{ paddingLeft: "0px" }}>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                            <div className="pl-3 bg-white pt-3">
                                <img className="float-left mt-2 mr-2" style={{ height: "40px", borderRadius: "50%" }} src="https://avatars.githubusercontent.com/u/70422032?s=400&u=4bb7ffbec3079ce1617c3fcc1b20b2cfecf12b6b&v=4" />
                                <h4 className="mb-0">Pilton Brahma</h4>
                                <p>B.Tech Ece II-Year</p>
                            </div>
                        </Card>
                    </Col>


                </Row>
            </Container>
        </>
    );
}

export default Cards;