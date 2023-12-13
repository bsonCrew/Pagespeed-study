import copyToClipboard from "@/utils/copyToClipboard";

export default function Stat({title, value}: { title: string, value?: string }) {

    const handleBadgeClick = () => {
        if (!value) return;
        copyToClipboard(value);
    }

    return (
        <div>
            {title}:
            <div className="badge" onClick={handleBadgeClick}>{value}</div>
        </div>
    )
}