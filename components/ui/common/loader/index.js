

const Loader = () => {
    return(
        <>
            <div className="sk-circle">
            { Array.from({length:12 }).map((_, i) => 
                <div 
                key={`dot-${i}`}
                className={`sk-circle${i + 1} sk-child`}/>
            )}
            </div>
        </>
    )
}

export default Loader