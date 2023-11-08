// Выводит список заголовков новостей и текущую дату, принимает на вход массив заголовков
interface IListOfDayNews{
  headers: string[],
  date:string
}
const ListOfDayNews = ({headers,date}:IListOfDayNews)=>{
  const headersList = headers.map((el)=> {
    return <li className="list_news" key={el}>{el}</li>
  })
  return(
    <div className="list_news_container component">
      <ul className="list_wrap">
        {headersList}
      </ul>
      <div className="date_of_news">{date}</div>
    </div>
  );
}
export default ListOfDayNews;