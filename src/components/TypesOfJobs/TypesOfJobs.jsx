import { useState } from 'react'
import Topic from '../UI/topic/Topic'
import { ArrowDown } from '../svg.module'
import classes from './TypesOfJobs.module.scss'

const TypesOfJobs = ({ data }) => {

    const [open, setOpen] = useState(false)
    const [picIndex, setPicIndex] = useState(0)

    function handleClick() {
        setOpen(e => !e)
    }

    return (
        <section className={classes.TypesOfJobs}>
            <div className='container'>
                <Topic>Виды работ</Topic>
                <div className={classes.row}>
                    <div className={classes.accordeon}>
                        {
                            data.map((item, key) => { return ( 
                                <div key={key} className={`${classes.item} ${!open?classes.open:''}`}>
                                    <div className={classes.header} onClick={handleClick} >
                                        <h3 className={classes.title}>
                                            <div className={classes.element}></div>
                                            {item.title}
                                        </h3>
                                        <div className={classes.arr_btn}><ArrowDown/></div>
                                    </div>
                                    <div className={classes.body}>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )})
                        }
                    </div>
                    <div className={classes.picture_wrapp}>
                        <div className={classes.pic} style={{
                            // background:`url(${data[picIndex].pic}) no-repeat center`
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TypesOfJobs