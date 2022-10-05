
export default function Card({ header = "Header", className = "", children, action }) {
    return (
        <div className={`lg:rounded-16 bg-container-background pb-8 ${className}`}>
            <div className="m-8 space-y-8">
                <div className="flex justify-between items-center pt-8">
                    <h3 className='text-h1 text-text-primary font-semibold'>{header}</h3>
                    {action}
                </div>
                <div className="w-full my-8"></div>
                {children}
            </div>
        </div>
    )
}
