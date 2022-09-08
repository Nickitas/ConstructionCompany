import classes from './Button.module.scss'

const Button = ({ props, children }) => {
    return (
        <a {...props} className={classes.Button}>
            {children}
        </a>
    )
}

export default Button