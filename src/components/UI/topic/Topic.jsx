import classes from './Topic.module.scss'

const Topic = ({ children }) => {
    return (
        <div className={classes.Topic}>
            <span className={classes.element}></span>
            <h2>{ children }</h2>
            <span className={classes.element}></span>
        </div>
    )
}
export default Topic