interface Props{
  title:string
}

export function SortItem ({title}:Props) {
  return (
    <div className="sort__item">
      <p> {title}</p>
      <button> &uarr; </button>
    </div>
  )
}