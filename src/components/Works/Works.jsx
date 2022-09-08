import Topic  from '../UI/topic/Topic'
import classes from './Works.module.scss'

const Works = ({ data }) => {
    return (
        <section className={classes.Works} id='works'>
            <div className='container'>
                <Topic>Работы</Topic>
                <div className={classes.cards_wrapper}>
                    {
                        data.map((item, key) => { return (
                            <div key={key} className={classes.card} style={{
                                background:`no-repeat url(${item.bg}) center center`,
                                backgroundSize:'cover'
                            }}>
                                <div className={classes.blure}>
                                    <h3 className={classes.title}>{item.title}</h3>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
        </section>
    )
}
export default Works