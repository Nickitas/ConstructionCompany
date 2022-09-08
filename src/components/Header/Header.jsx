import React from 'react'
import { LogoLight } from '../svg.module'
import classes from './Header.module.scss'

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className='container'>
                <div className={classes.window}>
                    <div className={classes.blure}>
                        <div className={classes.col}>
                            <h5 className={classes.brend}>
                                <LogoLight/>
                                <span>Название компании</span>
                            </h5>   
                            <h1 className={classes.title}>Строительная компания</h1>
                            <a className={classes.link_btn}>
                                Оставить заявку
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header