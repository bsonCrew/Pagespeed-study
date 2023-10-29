"use client"

import Input from "@/components/input";
import {ChangeEvent, useState} from "react";

const PROCESS_ENV_KEY = process.env.NEXT_PUBLIC_PROCESS_ENV_KEY;
const ADDRESS_PREFIX = "https://"

export default function Home() {
    const [URL, setURL] = useState<string>("");
    const [status, setStatus] = useState<string>("Idle");
    const [result, setResult] = useState<string>("");
    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setURL(event.target.value);
    }

    const fetchAnalysis = async () => {
        setStatus("Loading...");
        const response = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${ADDRESS_PREFIX + URL}&key=${PROCESS_ENV_KEY}`);
        const data = await response.json();
        setResult(data);
        setStatus("Finished");
    }

    return (
        <div className="w-full h-full grid gap-4">
            <div className="grid gap-x-8 gap-y-12">
                <div>
                    Current API KEY: {PROCESS_ENV_KEY}
                </div>
                <Input label="URL" placeholder="www.example.com" type="text" name="URL" value={URL}
                       onChange={handleAddressChange}/>
                <button className="btn btn-active w-32" onClick={fetchAnalysis}>
                    Analyze
                </button>
            </div>
            <div>
                Current status: {status}
            </div>
            <div className="w-full max-w-full">
                {JSON.stringify(result)}
            </div>
        </div>
    )
}
