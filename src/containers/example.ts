import { connect } from 'react-redux';
import * as actions from '../actions/example';
import { WelcomePage } from '../components/Pages';
import { ExampleState } from 'src/models/example';
import { Dispatch } from 'redux';
import { exampleAction } from '../actions/example';

const mapStateToProps = (state: ExampleState) => {
    return {
        messageProps: state.message
    };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.ExampleActions>) => {
    return {
        exampleActionInProps: (message: string) => {
            dispatch(exampleAction(message));
        }
    };
};

export const WelcomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomePage);
