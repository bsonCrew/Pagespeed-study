"use client"

import Input from "@/components/input";
import {ChangeEvent, useState} from "react";

export default function Home() {
    const [URL, setURL] = useState<string>("");
    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setURL(event.target.value);
    }

    const handleAnalyze = () => {
        alert(URL);
    }

    return (
        <div className="w-full h-full grid gap-4">
            <div className="grid gap-x-8 gap-y-12">
                <Input label="URL" placeholder="www.example.com" type="text" name="URL" value={URL}
                       onChange={handleAddressChange}/>
                <button className="btn btn-active w-32" onClick={handleAnalyze}>
                    Analyze
                </button>
            </div>
        </div>
    )
}
