import './App.css';
import ListOfDayNews from './components/ListOfDayNews';
import ShortNews from'./components/ShortNews';
import CurrensyWidget from './components/CurrensyWidget';
import SearchWidget from './components/SearchWidget';
import Banner from './components/Banner';
import WidgetContainer from './components/WidgetContainer';
function App() {
  return (
    <>
    <ListOfDayNews
      headers={['Today in the world','Recommend','In germany']}
      date = {new Date().toLocaleDateString()}
    />
    <ShortNews
      items={[{
        img:'...',
        text:'some text'
      }]}
    />
    <CurrensyWidget
    currensy={['USD','EUR','НЕФТЬ']}/>
    <SearchWidget
      tags={['Видео','Картинки','Новости','Карты','Маркет']}
      imgLabel={'someUrl...'}
      description={"Найдется все..."}
      btnText={'Найти'}
    />
    <Banner
    img={'.....'}
    />
    <WidgetContainer
    content={[{
      header:'Погода',
      content:{
        text:'Пасмурно',
      }
    },
    {
      header:'Редко посещаемое',
      content:{
        text:'Европа',
      }
    }

    ]}

    
    
    
    />

    </>
  );
}

export default App;
