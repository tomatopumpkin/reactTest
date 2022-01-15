import React from 'react'
import  Tab  from 'react-bootstrap/Tab';
import  Nav  from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPortfolio } from '../../redux/portfolio/portfolio.selector';

import './port-overview.style.scss';
import PortGrid from '../../components/port-grid/port-grid.component';

const PortOverview = ({portfolio}) => {
    return(
        <div className="port-overview">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12">
                            <Tab.Container defaultActiveKey="all">
                                <Nav variant="pill" className='port-overview-tab py-3'>
                                    <Nav.Item>
                                        <Nav.Link eventKey={'all'}>
                                            <h4>all</h4>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={'react'}>
                                            <h4>react</h4>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={'vue'}>
                                            <h4>vue</h4>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={'laravel'}>
                                            <h4>laravel</h4>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={'xd'}>
                                            <h4>xd</h4>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey = {'all'}>
                                        <div className="row">
                                            <PortGrid portfolio = {portfolio} />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey = {'react'}>
                                        <div className="row">
                                            <PortGrid portfolio = {portfolio} type={'react'}/>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey = {'vue'}>
                                        <div className="row">
                                            <PortGrid portfolio = {portfolio} type={'vue'}/>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey = {'laravel'}>
                                        <div className="row">
                                            <PortGrid portfolio = {portfolio} type={'laravel'}/>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey = {'xd'}>
                                        <div className="row">
                                            <PortGrid portfolio = {portfolio} type={'xd'}/>
                                        </div>
                                    </Tab.Pane>                
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
    )
}
const mapstateToProps = createStructuredSelector({
    portfolio:selectPortfolio
})

export default connect(mapstateToProps) (PortOverview)