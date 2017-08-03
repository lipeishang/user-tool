/**
 * Created by lipeishang on 17-7-31.
 */
const showAll = ()=> {
    return {
        type: 'FIND_ALL_USERS'
    }
};

const addUsers = (content) => {
    return {
        type:'ADD_USERS',
        content:content
    }
};

const deleteUser = (content)=>{
    return {
        type:'DELETE_USER',
        content:content
    }
};

const modifyUser = (content) =>{
    return {
        type:'MODIFY_USER',
        content:content
    }
};

const searchUser =(content) => {
    return {
        type:'SEARCH_USER',
        content:content
    }
};

module.exports = {
    showAll,
    addUsers,
    deleteUser,
    modifyUser,
    searchUser
};