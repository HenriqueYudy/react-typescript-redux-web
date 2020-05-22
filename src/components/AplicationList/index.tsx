import React, {Component} from 'react'
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Application } from '../../store/ducks/applications/types';
import { bindActionCreators , Dispatch } from 'redux';
import * as ApplicationActions from '../../store/ducks/applications/actions';
import ApplicationItem from '../AplicationItem';
import AplicationItem from '../AplicationItem';

interface StateProps {
    applications: Application[];
}

interface DispatchProps {
    loadRequest(): void
}



type Props = StateProps & DispatchProps;

class AplicationList extends Component<Props> {



    componentDidMount(){
        const { loadRequest } = this.props;

        loadRequest()
    }

    render(){
        const { applications } = this.props;


        return (
            <ul>
              {applications.map(applications => (
                  <AplicationItem key={applications.id} application={applications} />
              ))}
            </ul>
        )
    }
}

const mapStateToProps = (state : ApplicationState) =>  ({
    applications : state.applications.data
});

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators(ApplicationActions, dispatch);
    
export default connect(mapStateToProps, mapDispatchToProps)(AplicationList);