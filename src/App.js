import logo from './logo.svg';
import './assets/css/App.css'
import localRoutes from './route'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider} from './context/Provider'

const RenderRoute=(route)=>{
  
  document.title = route.title || 'OceanLink'
  
   return  <Route 
            path={route.path} 
            exact 
            render={(props)=><route.component {...props} />}
            />
}


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Switch>
              { localRoutes.map((route,index)=>{
                  
                return (
                        
                        <Route key={index} exact path={route.path} render={(props)=><route.component {...props}/>}/>
                        )
              })}
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
