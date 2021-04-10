import { Container, Row, Col, Form, Button } from 'react-bootstrap'
const Login = () => {
    return (
        <Container fluid className="fullHeight">
            <Row className="text-center vertical-center">
                <Col lg={12} className="mx-auto login">
                    <h1 className="text-white">SlamBook</h1>
                    <Form>
                        <Form.Group className="w-lg-25 mx-auto">
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="w-lg-25 mx-auto">
                            <Form.Control type="password" placeholder="Enter Password" />
                            <a href="" className="float-right text-white position-relative text-decoration-none mt-2">Forgot Password</a>
                        </Form.Group>
                        <div className="group3">
                            <Button type="submit" className="btn btn-dark btn1 bg-gradient mr-5">Log in</Button>
                            <button type="submit" className="btn btn-close-white text-white">Sign up</button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;