"use client"

import {ChangeEvent} from "react";
import {useRecoilState} from "recoil";
import {PROCESS_ENV_KEY} from "@/constants/pagespeed";
import Input from "@/components/Input";
import fetchPageSpeed from "@/utils/fetchPageSpeed";
import Toast from "@/components/Toast";
import urlState from "@/recoil/urlState";
import analysisStatusState from "@/recoil/analysisStatusState";
import analysisResultState from "@/recoil/analysisResultState";


export default function Home() {
    const [URL, setURL] = useRecoilState<string>(urlState);
    const [status, setStatus] = useRecoilState<string>(analysisStatusState);
    const [result, setResult] = useRecoilState<object>(analysisResultState);
    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => setURL(e.target.value);

    const fetchAnalysis = async () => {
        setStatus("Loading...");

        const pageSpeedResult = await fetchPageSpeed(URL);

        setResult(pageSpeedResult);
        setStatus("Finished");

        console.log(pageSpeedResult);
    }

    return (
        <div className="w-full h-full grid gap-4">
            <div className="grid gap-x-8 gap-y-12">
                <p>
                    Current API KEY: {PROCESS_ENV_KEY}
                </p>
                <Input label="URL" placeholder="www.example.com" type="text" name="URL" value={URL}
                       onChange={handleAddressChange}/>
                <button className="btn btn-active w-32 hover:bg-white" onClick={fetchAnalysis}>
                    Analyze
                </button>
            </div>
            <div>
                Current status: {status}
            </div>
            <div className="w-full max-w-full">
                {JSON.stringify(result)}
            </div>
            <h1>
                Show Sample
            </h1>
            <Toast/>

        </div>
    )
}
