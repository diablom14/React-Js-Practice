export default function HelloText(props) {
    let name = props.name;
    const bgColor = props.bg;

    
    return (
        <div className={`h-50 w-100 rounded-xl flex flex-col justify-center bg-${bgColor}-400`}>
            <h1 className='font-mono font-bold'>Hello {name}</h1>
        </div>
    )
}