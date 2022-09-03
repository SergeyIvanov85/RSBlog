export interface Props {
    title:string
}

export enum PeriodNames {
    week="за неделю",
    month = "за месяц",
    year="за год"
}

export function PeriodItem({title}:Props) {
    return (
        <li className='statistics-sort-item'>
            <a href='#' className='statistics-sort-link'>
                <span></span>    
                {title}
            </a>
        </li>
    )
}