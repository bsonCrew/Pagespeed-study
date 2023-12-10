import {atom} from "recoil";

const toastState = atom({
    key: 'ToastState',
    default: [],
});

export default toastState;