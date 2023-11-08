// Отображает краткие содержание новости, принимает на вход массив объектов с текстом и URL изображения
interface IShortNews{
  img: string,
  text:string
}
interface IShortNewsProps{
  items:IShortNews[]
}
const ShortNews = ({items}:IShortNewsProps)=>{
  const listNews = items.map((el)=> {
    return <li className="short_news" key={el.text}>
      <img src={el.img} alt="..." />
      <div className="short_news_text">{el.text}</div>
    </li>
  })
  return(
    <div className="short_news_container component">
      <ul className="short_news_wrap">
        {listNews}
      </ul>
    </div>
  );
}
export default ShortNews;