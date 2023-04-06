import  style from './loginCard.module.css'

export default function LoginCard({title,children }) {
    return (
        <div className={style.card}>
            <h2 className={style.title}>{title}</h2>
            { children }
        </div>
    )
}