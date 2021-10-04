import { isEmpty } from "lodash";

const eRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function validateSignin(data = {}) {
    let errors = {};

    if(!data.email.length || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
        errors.email = "Please add valid email address";
    }

    if(!data.password.length){
        errors.password = "Please add valid password";
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}
