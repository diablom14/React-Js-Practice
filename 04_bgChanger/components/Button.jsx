
function Button(props) {
    const colorMap = {
        blue: 'bg-blue-400',
        red: 'bg-red-400',
        lavender: 'bg-purple-200', // closest Tailwind equivalent
        pink: 'bg-pink-300',
        green: 'bg-green-400',
        yellow: 'bg-yellow-300',
    };


    let bgColor = colorMap[props.bgColor];
    return (
        <button className={`h-10 w-32 rounded-lg 
        p-[5px] ${bgColor} text-black`}
            onClick={()=>props.setColor(props.bgColor)}>
            {props.bgColor}
        </button>
    )
}

export default Button