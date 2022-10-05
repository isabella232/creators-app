export default function Section({ header = "Header", className = "", children }) {
    return (
        <section {...{ className }}>
            <h3 className='text-h3 text-text-primary font-semibold mb-8'>{header}</h3>
            {children}
        </section>
    )
}