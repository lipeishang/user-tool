/**
 * Created by lipeishang on 17-8-1.
 */
import request from 'superagent';

export default store => next=>action=>{
    switch(action.type){
        case 'DELETE_USER':
            request.post('/deleteUser')
                .send(action.content)
                .type('json')
                .end((err,res) => {
                    store.dispatch({type:'FIND_ALL_USERS'})
                });
            break;
    }
    next(action);
}