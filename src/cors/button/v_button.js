import "./style.css"

export default function VButton(props) {
    let {title, onPress, isDisabled=false} = props
    return (
        <button className="vButton" disabled={isDisabled} onClick={onPress}>{title}</button>
    )
}
