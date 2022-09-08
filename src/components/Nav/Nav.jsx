import React, { useState } from 'react'
import { Logo, Menu, Close } from '../svg.module'
import Button from '../UI/buttons/button/Button'
import classes from './Nav.module.scss'

const listItems = [
    {
        title:'Работы',
        link:'#works'
    },
    {
        title:'Отзывы',
        link:'#reviews'
    },
    {
        title:'Контакты',
        link:'#'
    },
    {
        title:'Новости',
        link:'#'
    },
    {
        title:'О Нас',
        link:'#about'
    },
]

const Nav = () => {

    const [active, setActive] = useState()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className={classes.Nav}>
            <div className='container'>
                <div className={classes.row}>
                    <div className={classes.list}>
                        <Logo />
                        <ul>
                            {
                                listItems.map((item, key) => { return (
                                    <li className={active&&classes.active} key={key}>
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                )})
                            }
                        </ul>
                    </div>
                    
                    <Button>Оставить заявку</Button>

                    <div className={classes.menu_btn} onClick={() => setMenuOpen(e => !e)}>
                        {menuOpen?<Close/>:<Menu/>}
                    </div>

                    <div className={`${classes.dropdown} ${menuOpen&&classes.open}`}>
                        <div className='container'>
                            <div className={classes.col}>
                                {
                                    listItems.map((item, key) => <a key={key} href={item.link}>{item.title}</a> )
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Nav