import IconAssets from '@/assets/assets';
import {IconType} from '@/types/app/icon';
import Image from "next/image";

const Icon = ({iconImg}: { iconImg: IconType }) => (
    <Image className="20px" src={IconAssets[iconImg]} alt={iconImg}/>
);
export default Icon;
