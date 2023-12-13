import data from "@/data/dat_naver.json";

export default function SampleOutput() {
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}