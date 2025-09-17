import '../styles/button.css'

function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  }


  const isDisabled = props.disabled;
  return (
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}${isDisabled ? ' disabled' : ''}`.trimEnd()}
      onClick={isDisabled ? undefined : () => props.handleClick(props.children)}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
    >
      {props.children}
    </div>
  )
}

export default Button