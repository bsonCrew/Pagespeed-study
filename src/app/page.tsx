"use client"

import {ChangeEvent, useState} from "react";
import Input from "@/components/Input";
import {PROCESS_ENV_KEY} from "@/constants/pagespeed";
import fetchPageSpeed from "@/utils/fetchPageSpeed";
import Toast from "@/components/Toast";


export default function Home() {
    const [URL, setURL] = useState<string>("");
    const [status, setStatus] = useState<string>("Idle");
    const [result, setResult] = useState<string>("");
    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setURL(event.target.value);
    }

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
