import Topic  from '../UI/topic/Topic'
import classes from './About.module.scss'

const About = ({ data }) => {
    
    return (
        <section className={classes.About} id='about'>
            <div className='container'>

                <Topic>О Компании</Topic>

                <div className={classes.wrapper}>
                    {
                        data.map((item, key) => { return (
                            <div key={key} className={classes.row}>
                                <div className={classes.block}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                                <div className={classes.image_wrapp}>
                                    <div className={classes.pic} style={{
                                        background:`no-repeat url(${item.img}) center`,
                                        backgroundSize: 'contain'
                                    }}></div>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
        </section>
    )
}
export default About