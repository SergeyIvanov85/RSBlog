interface Props{
  title:string
}

export function ThemeItem ({title}:Props) {
  return (
    <div className="theme__item">
      <button></button>
      <p> {title}</p>
    </div>
  )
}