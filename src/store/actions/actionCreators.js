import {
    GET_AREA_ID,
    GET_AREAS,
    GET_DISTRICT_ID,
    GET_DISTRICTS,
    ADD_CUSTOMER,
    FORM_SUBJECT_ID,
    REMOVE_CUSTOMER,
    SHOW_OBJECTS,
    GET_TEACHERS, GET_TEACHERS_CARDS,
} from "./types";


export const getAreasAction = (payload) => ({
    type:GET_AREAS, payload
});

export const getAreaIdAction = (payload) => ({
    type:GET_AREA_ID, payload
});

export const getDistrictsAction = (payload) => ({
    type:GET_DISTRICTS, payload
});

export const getDistrictIdAction = (payload) => ({
    type:GET_DISTRICT_ID, payload
});



export const addCustomerAction = (payload) => ({
    type:ADD_CUSTOMER, payload
});

export const formSubjectIdAction = (payload) => ({
    type:FORM_SUBJECT_ID, payload
});
export const deleteCustomerAction = (payload) => ({
    type:REMOVE_CUSTOMER, payload
});

export const showObjectsAction = (payload) => ({
    type:SHOW_OBJECTS, payload
});


export const getTeachersAction = (payload) => ({
    type:GET_TEACHERS, payload
});

export const getTeachersCardsAction = (payload) => ({
    type:GET_TEACHERS_CARDS, payload
});