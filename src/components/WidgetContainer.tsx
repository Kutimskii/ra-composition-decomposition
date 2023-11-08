// Создает контейнер для виджетов, и сами виджеты

interface IWidgetContent{
  content:IWidgetContentProps[]
}

interface IWidgetContentProps{
  header:string,
  btnText?:string
  content:{
    img?:string,
    text:string,
  }
}
const WidgetContainer = ({content}:IWidgetContent)=>{
 const arrayContent = content.map((el)=>{
    return <div className="widget_wrapper">
        <h2 className="widget_header">{el.header}</h2>
        <div className="widget_text">{el.content.text}</div>
      </div>
  })
  return(
    <div className="widget_container component">
      {arrayContent}
    </div>
  );
}
export default WidgetContainer;