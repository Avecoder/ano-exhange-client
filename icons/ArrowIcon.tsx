import {FC} from "react";
import {IconProps} from "@/icons/@type";



const ArrowIcon: FC<IconProps> = ({fill}) => {
    return (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2921 7.45618L7.80225 0.0876403C7.73708 0.0314605 7.65393 0 7.56629 0H5.57753C5.41124 0 5.33483 0.206742 5.46067 0.314607L13.3303 7.14607H0.179775C0.0808989 7.14607 0 7.22697 0 7.32584V8.67416C0 8.77303 0.0808989 8.85393 0.179775 8.85393H13.3281L5.45843 15.6854C5.33258 15.7955 5.40899 16 5.57528 16H7.63146C7.67416 16 7.71685 15.9843 7.74831 15.9551L16.2921 8.54382C16.3699 8.47617 16.4323 8.39262 16.475 8.2988C16.5178 8.20499 16.5399 8.10309 16.5399 8C16.5399 7.89691 16.5178 7.79501 16.475 7.7012C16.4323 7.60738 16.3699 7.52383 16.2921 7.45618Z" fill={fill}/>
        </svg>
    )
}

export default ArrowIcon