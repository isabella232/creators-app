
export default function Card({ heading, header = "Header", className = "", children }) {

    if (!!header & header !== "Header") { 
        console.log("Warning: 'header' prop is deprecated and will be removed in future versions, use 'heading'")
    }
    
    const backCompat = !!heading ? heading : header

    return (
        <div className={`lg:rounded-16 bg-container-background pb-8 ${className}`}>
            <div className="m-8 space-y-8">
                <div className="flex justify-between items-center pt-8">
                    <h3 role="heading" className='text-h1 text-text-primary font-semibold'>{backCompat}</h3>
                </div>
                <div className="w-full my-8"></div>
                {children}
            </div>
        </div>
    )
}
