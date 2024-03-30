
const Car = ({className="", children} ) => {
    return(
        <div>
            <h1 className={`${className}`} >{children}</h1>
        </div>
    )
}

export default Car;