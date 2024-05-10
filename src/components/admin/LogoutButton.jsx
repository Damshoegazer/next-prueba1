"use client"
import { useAuthContext } from "../context/AuthContext"
import Boton from "../ui/Boton"

const LogoutButton = () => {
    const { logout } = useAuthContext()

    return (
        <div className="pt-24">
            <Boton onClick={logout} className="bg-pink-800">Cerrar sesión</Boton>
        </div>
        
    )
    
    
}

export default LogoutButton