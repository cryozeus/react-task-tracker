import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'

//rafce creates a boilerplate of a function component
const Header = ({ title, onAdd, showAdd }) => {
    
    const onClick = () => {
        console.log('Click')
    }
    
    const location = useLocation()

    return (
        <header className='header'>
            <h1 >{title}</h1>
           {location.pathname === '/' && 
            <Button 
             color={showAdd ? 'salmon' : 'lightseagreen'}
             text={showAdd ? 'Close' : 'Add'}
             onClick={onAdd}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS :
//const headingStyle = {
//    color: 'red', 
//    backgroundColor: 'black'
//}


export default Header
