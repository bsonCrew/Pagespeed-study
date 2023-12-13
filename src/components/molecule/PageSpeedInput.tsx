"use client";

import Input from "@/components/atom/Input";
import {ChangeEvent} from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {analysisURLState} from "@/recoil/analysisResultState";
import {analysisInitiatedState} from "@/recoil/analysisResultState";

export default function PageSpeedInput() {

    const [url, setURL] = useRecoilState<string>(analysisURLState);
    const initAnalysis = useSetRecoilState(analysisInitiatedState);

    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => setURL(e.target.value);
    const handleInitClick = () => initAnalysis(true);

    return (
        <>
            <Input label="URL" placeholder="www.example.com" type="text" name="URL" value={url}
                   onChange={handleAddressChange}/>
            <button className="btn btn-active w-32 hover:bg-white" onClick={handleInitClick}>
                Analyze
            </button>
        </>
    )
}