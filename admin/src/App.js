import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Datatable from './components/Datatable';
import Layout from './components/Layout';
// import Nav from "./components/Nav"
import Dash from './pages/Signup';
import Test from './pages/Test';
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './context/ProtectedRoute';
import RedirectRoute from './context/RedirectRoute';
import Signup from './pages/Signup';
import Report from './components/Report';
import Home from './pages/Home';

function App() {
  return (
    <>
    {/* <Router>
    <Layout>
      <Routes>
      </Routes>
    </Layout>
    </Router> */}



    <AuthProvider>
                <Router>
                <Layout>
                    <Routes>
                        {/* Basic pages */}
                        <Route element={<RedirectRoute />}>
                        <Route path="/" element={<Signup />} />
                            <Route path='/Signup' element={<Signup />} />
                        </Route>

                        <Route path="/forgot-password" element={<Dash />} />
                        <Route element={<ProtectedRoute />}>
                        <Route path="/Dash" element={<Dash/>} />
                           <Route path="/Datatable" element={<Datatable/>} />
                           <Route path="/Report" element={<Report/>} />
                           <Route path="/Home" element={<Home/>} />
                           <Route path="/Test" element={<Test/>} />
                        </Route>
                    </Routes>
                    </Layout>
                </Router>
            </AuthProvider>
    </>
  );
}

export default App;
