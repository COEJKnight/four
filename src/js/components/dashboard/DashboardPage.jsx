/**
  * DashboardPage.jsx
  * Created by Kevin Li 10/21/16
  **/

import React from 'react';
import Navbar from '../SharedComponents/navigation/NavigationComponent.jsx';
import Footer from '../SharedComponents/FooterComponent.jsx';
import DashboardContainer from '../../containers/dashboard/DashboardContainer.jsx';

export default class DashboardPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            type: props.route.type
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.route.type != this.state.type) {
            this.setState({type:nextProps.route.type})
        }
    }

	render() {
        let isFabs = this.state.type === 'fabs';
        let color = isFabs ? 'teal' : 'dark';
        let header = isFabs ? 'FABS Submission Dashboard' : 'DABS Submission Dashboard';
        let activeTab = isFabs ? 'detachedDashboard' : 'dashboard';
        return (
            <div>
                <div className="usa-da-site_wrap usa-da-dashboard-page">
                    <Navbar activeTab={activeTab} type={this.state.type} />
                    <div className={"usa-da-content-" + color}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mt-40 mb-20">
                                    <div className="display-2" data-contentstart="start" tabIndex={-1}>
                                        {header}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DashboardContainer type={this.state.type}/>
                </div>
                <Footer />
            </div>
		)
	}
}