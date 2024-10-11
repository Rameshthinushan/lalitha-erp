import {Routes, Route} from 'react-router-dom'
import { Layout } from '../pages/layouts/layout'
import BarcodeScan from '../pages/layouts/components/barcodeScan'

export const Router = () => {
  return (
    <Routes>
      <Route path='/:domin?' name="dashboard" element={<Layout/>}/>
      <Route path='/barcode' name="barcode" element={<BarcodeScan/>}/>

    </Routes>
  )
}
