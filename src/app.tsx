import Moicroscope from './components/Moicroscope'
import './app.css'

export const App = () => {

  return (
    <div className="card">
      <h1>모모고요의 현미경, Moicroscope</h1>

      <Moicroscope 
        url="https://cdn.dribbble.com/userupload/12661764/file/original-886070ed65735a811c1922777b4ecfab.png?resize=1504x1128" 
        width="600px" 
        height="400px" 
        customStyle={{ margin: '150px auto', border: '4px solid white', boxShadow: '-1px 5px 15px #DDDDDD' }}
      />
    </div>
  )
}
