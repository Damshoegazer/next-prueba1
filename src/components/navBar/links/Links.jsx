'use client'


import Link from "next/link"
import '../navBar.css'
import { usePathname } from 'next/navigation'


const Links = () => {
    
    
    const links = [
        {
            label: <svg width="75" height="24" viewBox="0 0 75 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 23.3297V4.20376L2.58387 0.874031H8.76385V3.59109L10.6019 0.874031H16.7818V20.2397L14.1713 23.3297H8.01799V20.8524L5.9136 23.3297H0ZM2.82361 20H8.49747V12.2218H10.8416V20H16.5155V1.14041H10.8416V9.1584H8.49747V1.14041H2.82361V20ZM18.7557 23.3297V4.20376L21.3396 0.874031H35.5376V20.2397L32.9271 23.3297H18.7557ZM21.5794 20H35.2712V1.14041H21.5794V20ZM27.2532 14.8323V5.93522H29.5973V14.8323H27.2532ZM37.5115 23.3297V4.20376L40.0954 0.874031H45.5295L48.3531 5.77539L52.3221 0.874031H57.7296V20.2397L55.1457 23.3297H48.8592V13.1008L46.2753 16.2973V20.2397L43.798 23.3297H37.5115ZM40.3351 20H46.009V7.90642L49.0989 12.2218L51.816 7.53349V20H57.4899V1.14041H52.4287L48.8592 7.1872L45.3963 1.14041H40.3351V20ZM59.701 23.3297V4.20376L62.2849 0.874031H74.8579V6.30815L72.2741 9.39814H71.2885V12.3549L69.3173 14.8056H74.8579V20.2397L72.2741 23.3297H59.701ZM62.5246 20H74.6182V15.072H68.1985V12.1152H71.0487V9.02521H68.1985V6.06841H74.6182V1.14041H62.5246V20Z" fill="#D31C1C"/>
            </svg>
            ,
            href: "/"
        },
        {
            label: "Productos",
            href: "/productos/todos"

        },
        {
            label: "Hombre",
            href: "/hombre"

        },
        {
            label: "Mujer",
            href: "/mujer"
        }
    ]

    
    
    const pathname = usePathname()

    return(
        
        <div className="linksStyle">
            
            {links.map((link) => {
                return(
                    <div className="flex items-center gap-20" key={link.label}>
                        <Link href={link.href}
                        className={ ` p-2 rounded-lg text-gray-800 uppercase text-xs border-gray-600 ${pathname === link.href ? "bg-gray-300 text-gray-700 font-semibold" : ""} `} >
                            {link.label} 
                        </Link>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Links