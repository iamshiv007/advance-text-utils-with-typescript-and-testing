
const ButtonGroup = () => {
  return (
    <div className="buttonsWrapper">
        <button data-tooltip-id="my-tooltip" data-tooltip-content="Change to Uppercase">🔠</button>
        <button data-tooltip-id="my-tooltip" data-tooltip-content="Clear Extra spaces">✨</button>
        <button data-tooltip-id="my-tooltip" data-tooltip-content="Clear">🧹️</button>
        <button data-tooltip-id="my-tooltip" data-tooltip-content="Copy">🖨</button>
    </div>
  )
}

export default ButtonGroup