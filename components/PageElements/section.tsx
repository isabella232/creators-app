interface SectionProps {
    heading?: string,
    header?: string,
    className?: string,
    children?: React.ReactNode
    
}

export default function Section({ heading, header = "Header", className = "", children }: SectionProps) {
    if (!!header && header !== "Header") {
        console.log("Warning: 'header' prop is deprecated and will be removed in future versions, use 'heading'")
    }

    const backCompat = !!heading ? heading : header

    return (
        <section {...{ className }}>
            <h3 role="heading" className='text-h3 text-text-primary font-semibold mb-8'>{backCompat}</h3>
            {children}
        </section>
    )
}