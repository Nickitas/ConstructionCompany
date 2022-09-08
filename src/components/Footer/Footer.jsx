import classes from './Footer.module.scss'

const date = new Date().getFullYear()


const Footer = () => {

    return (
        <section className={classes.Footer}>
            <div className='container'>
                <div className={classes.row}>
                    <div className={classes.company}>© {date=='2022'?date:`2022 - ${date}`} <b>Название компании</b></div>
                    <div className={classes.autor}>
                        Created &amp; desined by {' '}
                        <span>Nikita Kodatsky</span>
                        <div className={classes.tooltype}>
                            <div>telegram: @Nidatsky</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer