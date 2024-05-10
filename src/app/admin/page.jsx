import LogoutButton from "@/components/admin/LogoutButton"
import ProductsTable from "@/components/admin/ProductsTable"

const Admin = () => {

    return (
        <div className="container m-auto pt-20 pl-10">
            <LogoutButton />
            <h2 className="text-2xl my-10 border-b pb-4">Panel Administración</h2>
            <ProductsTable />
        </div>
    )
}

export default Admin