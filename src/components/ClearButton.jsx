import '../styles/clearbutton.css'


function ClearButton (props) {
	return (
		<div className='clear-button'>
			{props.children}
		</div>

	)

}

export default ClearButton