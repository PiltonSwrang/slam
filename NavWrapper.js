import { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Cards from './Cards'
const NavWrapper = () => {
    const [hideSideNav, setHideSideNav] = useState('')
    const handleClick = () => {
        setHideSideNav(hideSideNav == "d-none" ? "" : "d-none")
    }
    return (<>
        <Container fluid>
            <Row>
                {/* SIDEBAR  */}
                <Col sm={3} className={"shadow-sm sidebar " + hideSideNav}>
                    <h2 className="logo mt-3">SLAMBOOK</h2>
                    <br />
                    <div className="text-center">
                        <img className="profile-pic " src="https://avatars.githubusercontent.com/u/70422032?s=400&u=4bb7ffbec3079ce1617c3fcc1b20b2cfecf12b6b&v=4" />
                        <h5 className="mb-0">PILTON BRAHMA</h5>
                        <p className="text-muted">B.Tech Ece II-Year</p>
                    </div>
                    <ul className="navbar-nav">
                        <li><a href="" className="nav-link">Slams</a></li>
                        <li><a href="" className="nav-link">Photos</a></li>
                        <li><a href="" className="nav-link">Invites</a></li>
                        <li><p className="nav-link"> &nbsp;</p></li>
                        <li><a href="" className="nav-link">Send Invite</a></li>
                        <li><a href="" className="nav-link">Fill Slam</a></li>
                        <li><a href="" className="nav-link">Add Memories</a></li>
                    </ul>
                </Col>

                {/* TOP NAV  */}
                <Col className="top-nav">
                    <nav className="navbar navbar-expand navbar-light" style={{ boxShadow: "0px 0px 3px #1212" }}>
                        <a href="javascript:" className="hamburger" onClick={() => handleClick()}>
                            <i className="fas fa-bars"></i>
                        </a>
                        <ul className="navbar-nav ms-auto">
                            <a href="" className="nav-link">Feeback</a>
                            <a href="" className="nav-link">Channeli</a>
                            <p className="nav-link mb-0">|</p>
                            <a href="" className="nav-link"><i className="fas fa-bell"></i></a>
                            <a href="" className="nav-link"><i className="fas fa-user"></i></a>
                        </ul>
                    </nav>

                    <div className="my-5 slam-info ml-3" >
                        <a href="" className="nav-link d-inline-block">
                            <h5 className="d-inline-block">Slams Received</h5>
                        </a>
                        <a href="" className="nav-link d-inline-block">
                            <h5 className="d-inline-block">Slams Filled</h5>
                        </a>
                    </div>

                    {/* CARDS  */}
                    <Cards />

                </Col>
            </Row>

        </Container>
    </>)
}

export default NavWrapper;