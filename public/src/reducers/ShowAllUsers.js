/**
 * Created by lipeishang on 17-7-31.
 */
const ShowAllUsers = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_ALL_USERS':
            return action.content
    }
    return state;
};

export default ShowAllUsers