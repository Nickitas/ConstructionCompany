import { useEffect, useState, Children, cloneElement } from 'react'
import { ArrowLeft, ArrowRight } from '../svg.module'
import classes from './Carousel.module.scss'

const PAGE_WIDTH = 736

export const Carousel = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(-636)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            console.log(newOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style:{
                        minWidth:`${PAGE_WIDTH}px`,
                        maxWidth:`${PAGE_WIDTH}px`,
                        height:`100%`,
                    }
                })
            })
        )
    }, [])

    return (
        <div className={classes.slider}>
            <div className={classes.arrow_btn} onClick={handleLeftArrowClick}><ArrowLeft/></div>
            <div className={classes.window}>
                <div className={classes.pages}
                    style={{
                        transform:`translateX(${offset}px)`,
                    }}
                >
                    { pages }
                </div>
            </div>
            <div className={classes.arrow_btn} onClick={handleRightArrowClick}><ArrowRight/></div>
        </div>
    )
}