import {atom, selector} from "recoil";
import fetchPageSpeed from "@/utils/fetchPageSpeed";
import {AnalysisInitiated, AnalysisResult, AnalysisStatus, AnalysisURL} from "@/types/app/analysis";

const analysisInitiatedState = atom<AnalysisInitiated>({
    key: 'analysisInitiatedState',
    default: false,
});

const analysisURLState = atom<AnalysisURL>({
    key: 'analysisURLState',
    default: '',
});


const analysisResultState = selector<AnalysisResult>({
    key: "analysisResultState",
    get: ({get}) => {
        const initiated = get(analysisInitiatedState);
        const url = get(analysisURLState);

        if (!initiated || !url) {
            return {};
        }

        try {
            const analysisResult = fetchPageSpeed(url);
            return analysisResult;
        } catch (err) {
            throw Error("analysis error occured");
        }
    }
});

const analysisStatusSelector = selector<AnalysisStatus>({
    key: 'analysisStatusSelector',
    get: ({get}) => {
        const analysisInitiated = get(analysisInitiatedState);
        const analysisResult = get(analysisResultState);

        if (analysisInitiated) {
            return 'init';
        } else if (Object.keys(analysisResult).length === 0) {
            return 'loading';
        } else {
            return 'done';
        }
    },
});

export default analysisResultState;
export {analysisInitiatedState, analysisURLState, analysisStatusSelector};