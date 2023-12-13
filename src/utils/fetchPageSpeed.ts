import {ADDRESS_PREFIX, PAGESPEED_API_KEY} from "@/constants/pagespeed";

const fetchPageSpeed = async (url: string) => {
    const response = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${ADDRESS_PREFIX + url}&key=${PAGESPEED_API_KEY}`);
    const data = await response.json();
    return data;
}

export default fetchPageSpeed;