import {FC} from "react";
import {IconProps} from "@/icons/@type";


const ArrowMiniIcon: FC<IconProps>  = ({fill}) => {
    return (
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke={fill} />
        </svg>
    )
}

export default ArrowMiniIcon