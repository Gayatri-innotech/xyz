import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
    return params
        ? axios({
            url: url,
            method: method,
            headers: headers,
            data: params,
        })
        : axios({
            url,
            method: method,
            headers: headers,
            data: {},
        })
}

const GetApiDetails = () => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return AxiosRequest(`https://secure-refuge-14993.herokuapp.com/list_polls`, 'GET', headers, {});
};

const GetApiDetailsUser = () => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return AxiosRequest(`https://secure-refuge-14993.herokuapp.com/list_users`, 'GET', headers, {});
};

const PostApiDetails = (data) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return AxiosRequest(`https://secure-refuge-14993.herokuapp.com/add_poll?title=${data['title']}%20Poll&options=${data['option1']}____${data['option2']}____${data['option3']}____${data['option4']}`, 'POST', headers, data);
};

const PostVoteApiDetails = (data, id) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return AxiosRequest(`https://secure-refuge-14993.herokuapp.com/do_vote?option_text=nodejs&id=` + id, 'POST', headers, data);
};

const GetDetailsById = (id) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return AxiosRequest(`https://secure-refuge-14993.herokuapp.com/list_poll?id=` + id, 'GET', headers, {});
};

const UpdateApiDetails = (data, id) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return AxiosRequest(`https://secure-refuge-14993.herokuapp.com/update_poll_title?title=${data['title']}&id=` + id, 'PUT', headers, data);
};

const DeleteApiDetails = (id) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return AxiosRequest(`https://secure-refuge-14993.herokuapp.com/delete_poll?id=` + id, 'DELETE', headers, {});
};

const DeleteOptionApiDetails = (id, data) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    console.log('----', id);
    return AxiosRequest(`https://secure-refuge-14993.herokuapp.com/delete_poll_option?option_text=shi&id=` + id, 'DELETE', headers, {});
};

const PostOptionApiDetails = (data, id) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return AxiosRequest(`https://secure-refuge-14993.herokuapp.com/add_new_option?option_text=${data['title']}&id=` + id, 'POST', headers, data);
};

export { GetApiDetails, PostApiDetails, GetDetailsById, UpdateApiDetails, DeleteApiDetails, GetApiDetailsUser, DeleteOptionApiDetails, PostOptionApiDetails, PostVoteApiDetails };
