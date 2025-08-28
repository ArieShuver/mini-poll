export default function Buttonmy({ label, onClick }:any) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}
