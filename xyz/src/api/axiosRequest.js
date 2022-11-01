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

export { GetApiDetails, PostApiDetails, GetDetailsById, UpdateApiDetails, DeleteApiDetails, GetApiDetailsUser };