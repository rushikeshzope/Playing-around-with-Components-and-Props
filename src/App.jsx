import './App.css';
import lake from "./image/lake.JPG";
import HeaderOne from './components/HeaderOne';
import HeaderTwo from './components/HeaderTwo';
import GallaryFooter from './components/GallaryFooter';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
     
      {/* adding footer component */}

      <HeaderOne/>
      <HeaderTwo imageData={imageData}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
