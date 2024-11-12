//definir rotas p as pags principais
//login, Coletas, Rotas, Materiais, Estoque e Relatórios

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
import MaterialsPage from './pages/MaterialsPage.jsx';
import InventoryPage from './pages/InventoryPage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'; 
import {AuthProvider} from './context/AuthContext.jsx'; 
import EditCollectionForm from './pages/EditCollectionForm.jsx';



function App() {
  return (
    
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/collections" element={<ProtectedRoute><CollectionsPage /></ProtectedRoute>} />
          <Route path="/materials" element={<ProtectedRoute><MaterialsPage /></ProtectedRoute>} />
          <Route path="/inventory" element={<ProtectedRoute><InventoryPage /></ProtectedRoute>} />
          <Route path="/reports" element={<ProtectedRoute><ReportsPage /></ProtectedRoute>} />
          <Route path="/collections/:id/edit" element={<EditCollectionForm />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;






















// // src/App.js
// import React from 'react';
// import LoginForm from './loginForm.js';

// function App() {
//   return (
//     <div className="App">
//       <h1>Formulário de Login</h1>
//       <LoginForm />
//     </div>
//   );
// }
// r
// export default App;

// // http://localhost:3000