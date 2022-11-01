import {
    GetApiDetails, PostApiDetails, UpdateApiDetails, DeleteApiDetails, GetApiDetailsUser,
    DeleteOptionApiDetails, PostOptionApiDetails, PostVoteApiDetails
} from "../../api/axiosRequest";
import {
    GET_DETAILS, POST_DETAILS, UPDATE_DETAILS, DELETE_DETAILS, GET_DETAILS_USER,
    DELETE_OPTION_DETAILS, POST_OPTION_DETAILS, POST_VOTE_DETAILS
} from "../type";

const GetApiAction = () => {
    return function (dispatch) {
        return GetApiDetails().then((res) => {
            console.log('GetApiAction Response', res);
            dispatch({
                type: 'GET_DETAILS',
                payload: res.data.data,
            })
        })
    };
};

const GetApiUserAction = () => {
    return function (dispatch) {
        return GetApiDetailsUser().then((res) => {
            console.log('GetApiUserAction Response', res);
            dispatch({
                type: 'GET_DETAILS_USER',
                payload: res.data.data,
            })
        })
    };
};

const PostApiAction = (request) => {
    return function (dispatch) {
        // dispatch({
        //     type: 'POST_DETAILS',
        //     payload: false,
        // });
        return PostApiDetails(request).then((res) => {
            console.log('PostApiAction Response', res);
            dispatch({
                type: 'POST_DETAILS',
                payload: true,
            });
        });
    };
};

const PostVoteApiAction = (request, id) => {
    return function (dispatch) {
        // dispatch({
        //     type: 'POST_VOTE_DETAILS',
        //     payload: false,
        // });
        return PostVoteApiDetails(request, id).then((res) => {
            console.log('PostVoteApiDetails Response', res);
            dispatch({
                type: 'POST_VOTE_DETAILS',
                payload: '',
            });
        });
    };
};

const UpdateApiAction = (request, id) => {
    return function (dispatch) {
        // dispatch({
        //     type: 'UPDATE_DETAILS',
        //     payload: false,
        // })
        return UpdateApiDetails(request, id).then((res) => {
            console.log('UpdateApiAction Response', res);
            dispatch({
                type: 'UPDATE_DETAILS',
                payload: true,
            })
        })
    };
};

const DeleteApiAction = (id) => {
    return function (dispatch) {
        // dispatch({
        //     type: 'DELETE_DETAILS',
        //     payload: false,
        // })
        return DeleteApiDetails(id).then((res) => {
            console.log('DeleteApiAction Response', res);
            dispatch({
                type: 'DELETE_DETAILS',
                payload: true,
            })
        })
    };
};

const DeleteOptionApiAction = (request, id) => {
    return function (dispatch) {
        // dispatch({
        //     type: 'DELETE_OPTION_DETAILS',
        //     payload: false,
        // })
        return DeleteOptionApiDetails(request, id).then((res) => {
            console.log('DeleteOptionApiAction Response', res);
            dispatch({
                type: 'DELETE_OPTION_DETAILS',
                payload: true,
            })
        })
    };
};

const PostOptionApiAction = (request, id) => {
    return function (dispatch) {
        // dispatch({
        //     type: 'POST_OPTION_DETAILS',
        //     payload: false,
        // });
        return PostOptionApiDetails(request, id).then((res) => {
            console.log('PostOptionApiAction Response', res);
            dispatch({
                type: 'POST_OPTION_DETAILS',
                payload: '',
            });
        });
    };
};

export { GetApiAction, PostApiAction, UpdateApiAction, DeleteApiAction, GetApiUserAction, DeleteOptionApiAction, PostOptionApiAction, PostVoteApiAction };