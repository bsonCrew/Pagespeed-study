import {atom} from "recoil";

const urlState = atom({
    key: 'urlState',
    default: '',
});

export default urlState;