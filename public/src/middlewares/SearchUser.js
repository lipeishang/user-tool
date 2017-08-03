/**
 * Created by lipeishang on 17-8-1.
 */
import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'SEARCH_USER':
            request.get(`/searchUser/${action.content.phonenumber}`)
                .end((err, res)=> {
                    if (res.body) {
                        next({type: 'SHOW_ALL_USERS', content: res.body});
                    }
                });
            break;
    }
    next(action);
}