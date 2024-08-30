import classes from './Title.module.css';

export default function Title({title, para}) {

    return <div className={classes.title}>
        <h2>{title}</h2>
        <p>{para}</p>
    </div>
}