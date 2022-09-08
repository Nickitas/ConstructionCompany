import React from 'react'
import Topic  from '../UI/topic/Topic'
import { Carousel } from '../carousel/Carousel'
import classes from './Reviews.module.scss'

const Reviews = ({data}) => {
    return (
        <section className={classes.Reviews} id='reviews'>
            <div className='container'>
                <Topic>Отзывы</Topic>
            </div>
            <Carousel>
                {
                    data.map((item, key) => { return (
                        <div key={key} className={`${classes.item} ${classes.active}`}>
                            <div className={classes.rew}>
                                <h3>{item.person}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )})
                }
            </Carousel>
        </section>
    )
}
export default Reviews