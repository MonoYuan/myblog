import request from '../utils/request';

export const fetchMenu = ()=>{
    return request({
        url: '/api/menu/getMenuList',
        method: 'get'
    });
}