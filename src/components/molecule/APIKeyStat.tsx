import Stat from "@/components/atom/Stat";
import {PAGESPEED_API_KEY} from "@/constants/pagespeed";

export default function APIKeyStat() {
    return (
        <div>
            <Stat title="Pagespeed API Key" value={PAGESPEED_API_KEY}/>
        </div>
    )
}