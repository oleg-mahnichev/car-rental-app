import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import CatalogPage from './pages/Catalog/CatalogPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';
import SharedLayout from './components/SharedLayout/SharedLayout ';

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="catalog" element={<CatalogPage />} />
//           <Route path="favorites" element={<FavoritesPage />} />
//         </Route>
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
export default App;
