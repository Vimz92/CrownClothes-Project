import Home from './routes/home/home.route';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import SignIn from './routes/sign-in/sign-in';
import Shop from './routes/shop/shop';



const App = () => {
  return (
    <Routes> 
      <Route path='/' element={<Navigation />}>
       <Route index element={<Home />} />
       <Route path='shop' element={<Shop />} />
      <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
     
  )
  
}

export default App;
