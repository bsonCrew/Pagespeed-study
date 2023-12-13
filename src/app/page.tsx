"use client"

import {useRecoilState, useRecoilValue} from "recoil";
import Toast from "@/components/atom/Toast";
import analysisResultState, {analysisInitiatedState, analysisStatusSelector} from "@/recoil/analysisResultState";
import APIKeyStat from "@/components/molecule/APIKeyStat";
import PageSpeedInput from "@/components/molecule/PageSpeedInput";
import {AnalysisResult} from "@/types/app/analysis";
import toastState from "@/recoil/toastState";


export default function Home() {
    // const [toast, setToast] = useRecoilState(analysisInitiatedState)
    const result = useRecoilValue<AnalysisResult>(analysisResultState);
    const analysisStatus = useRecoilValue(analysisStatusSelector);

    return (
        <div className="w-full h-full grid gap-4">
            <div className="grid gap-x-8 gap-y-12">
                <APIKeyStat/>
                <PageSpeedInput/>

            </div>

            <div>
                Current status: {analysisStatus}
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
