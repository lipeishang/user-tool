/**
 * Created by lipeishang on 17-7-31.
 */
import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'FIND_ALL_USERS':
            request.get('/getAllInfo')
                .end((err, res)=> {
                    if (res.body) {
                        next({type: 'SHOW_ALL_USERS', content: res.body});
                    }
                });
            break;
    }
    next(action);
}