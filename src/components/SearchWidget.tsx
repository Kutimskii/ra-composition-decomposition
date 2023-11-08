// выводит строку с поиском, тегами , картинкой
interface IitemsSearchWidjet{
  tags:string[],
  imgLabel:string
  description:string,
  btnText:string
}
const SearchWidget = (items:IitemsSearchWidjet)=>{
  return(
    <div className="search_widjet_container component">
      <div className="search_widjet_img">
        <img src={items.imgLabel} alt="Яндекс" />
      </div>
      <div className="search_widjet_content_wrap">
        <ul className="search_widjet_tags">
        </ul>
        <div className="search_widjet_input">
          <input type="text" name="search" id="" />
          <button className="search_widjet_input_btn" type="button">{items.btnText}</button>
        </div>
        <div className="search_widjet_description">
        {items.description}
        </div>
      </div>

    </div>
  );
}
export default SearchWidget;