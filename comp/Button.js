export default function Button({text="button text", handleClick=()=> {}}) {
  return <button onClick={handleClick}>{text}</button>
}