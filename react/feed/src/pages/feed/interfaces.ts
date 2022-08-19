export interface IBlogItem  {
  image:string;
  name: string,
  date:string,
  title:string,
  category:string,
  text:string
  count:ICount
}

export interface ICount{
  like:number,
  comment:number,
  view:number
}