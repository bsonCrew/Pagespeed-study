"use client";

import {useRecoilState} from "recoil";
import toastState from "@/recoil/toastState";
import Icon from "@/components/Icon";

export default function Toast() {
    const [isToastOpen, setIsToastOpen] = useRecoilState(toastState);

    if (!isToastOpen) return null;

    return (
        <div className="toast toast-start">
            <div className="alert alert-info">
                <span>New mail arrived.</span>
                <Icon iconImg="deleteIcon"/>
            </div>
            <div className="alert alert-success">
                <span>Message sent successfully.</span>
                <Icon iconImg="deleteIcon"/>
            </div>
        </div>
    )
}