'use client'


const Boton = ({children, className="", ...args} ) => {
    return (
        <button className={`rounded-lg py-2 px-4 bg-[#809B9B] text-white text-center ${className}`} 
        {...args}>
        {children}
        </button>
    );
}

export default Boton;
