/**
 * Created by lipeishang on 17-7-31.
 */
import mainPage from '../components/app';
import {connect} from 'react-redux';
import actions from '../actions/mainPage';

const mapStateToProps = (state)=> {
    return state;
};

const dispatchToProps = (dispatch)=> {
    return {
        getAllUsers: ()=> {
            dispatch(actions.showAll());
        },

        addUsers:(content) => {
            dispatch(actions.addUsers(content));
        },
        deleteUser:(content) =>{
            dispatch(actions.deleteUser(content));
        },
        modifyUser:(content) => {
            dispatch(actions.modifyUser(content));
        },
        searchUser:(content) =>{
            dispatch(actions.searchUser(content));
        }
    }
};

export default connect(mapStateToProps, dispatchToProps)(mainPage);