import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ItemMasterComponent from './components/ItemMasterComponent'
import ListItemMasterComponent from './components/ListItemMasterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPageComponent from './components/MainPageComponent'
import ListReceivingComponent from './components/ListReceivingComponent'
import ReceivingComponent from './components/ReceivingComponent'
import ListLocationMasterComponent from './components/ListLocationMasterComponent'
import LocationMasterComponent from './components/LocationMasterComponent'
import ReceivingPageComponent from './components/ReceivingPageComponent'
import ReceivingStorageComponent from './components/ReceivingStorageComponent'
import ListItemStorageComponent from './components/ListItemStorageComponent'
import ItemStoragePageComponent from './components/ItemStoragePageComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
              {/* // http://localhost:3000 */}
              <Route path='/' element= { <MainPageComponent />}></Route>
              {/* // http://localhost:3000/item_master */}
              <Route path='/item_master' element= { <ListItemMasterComponent />}></Route>
              {/* // http://localhost:3000/add_item */}
              <Route path='/add_item' element = { <ItemMasterComponent />}></Route>
              {/* // http://localhost:3000/update_item/1 */}
              <Route path='/update_item/:id' element = { <ItemMasterComponent /> }></Route>
              {/* // http://localhost:3000/receiving_page */}
              <Route path='receiving_page' element = { <ReceivingPageComponent />}></Route>
              {/* // http://localhost:3000/receiving_list */}
              <Route path='/receiving_list' element= { <ListReceivingComponent />}></Route>
              {/* // http://localhost:3000/receiving */}
              <Route path='/receiving' element= { <ReceivingComponent />}></Route>
              {/* // http://localhost:3000/location_master */}
              <Route path='/location_master' element= { <ListLocationMasterComponent />}></Route>
              {/* // http://localhost:3000/add_location */}
              <Route path='/add_location' element = { <LocationMasterComponent />}></Route>
              {/* // http://localhost:3000/update_location/1 */}
              <Route path='/update_location/:id' element = { <LocationMasterComponent />}></Route>
              {/* // http://localhost:3000/item_storage_page */}
              <Route path='item_storage_page' element = { <ItemStoragePageComponent />}></Route>              
              {/* // http://localhost:3000/receiving_storage */}
              <Route path='/receiving_storage' element={ <ReceivingStorageComponent />}></Route>
              {/* // http://localhost:3000/item_storage */}
              <Route path='/item_storage' element={ <ListItemStorageComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
