// Отображает курсы валют
interface Icurrensy{
  currensy:string[]
}

const  CurrensyWidget = ({currensy}:Icurrensy)=>{
  const currensyList = currensy.map((el)=> {
    return <li className="list_currensy" key={el}>{el}</li>
  })
  return(
    <div className="currensy_widget_container component">
      <ul className="currensy_list_wrap">
        {currensyList}
      </ul>
    </div>
  );
}
export default CurrensyWidget;