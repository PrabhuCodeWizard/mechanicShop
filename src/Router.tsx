import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingComponent from './components/Landing/LandingComponent';
import ServiceComponent from './components/Service/ServiceComponent';
import ServiceDetailComponent from './components/ServiceDetail/ServiceDetailComponent';


export function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingComponent />} />
        <Route path='ourservice' element={<ServiceComponent />} />
        <Route path='service/:serviceId' element={<ServiceDetailComponent />} />
      </Routes>
    </BrowserRouter>
  )
};
