'use client'

import { useRouter } from "next/navigation";

const GoBack = ({className="", ...args}) => {
const router = useRouter()

    return(
        <button className={`${className}`} onClick={() =>router.back()}{...args}>
            Volver
        </button>
    )
}
export default GoBack;