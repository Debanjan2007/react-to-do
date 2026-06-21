import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import ErrorBoundary from './components/utils/ErrorBoundary.jsx'
import MainLayout from './components/Layout/index.layout.jsx';
import DashBoard from './components/Hero/DashBoard.jsx'
import NotesUi from './components/Hero/Notes.jsx'
import NotFound from './components/utils/NotFound.jsx'
import AddNotesCard from './components/Notes/AddNotesCard.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary >
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="notes/" >
            <Route index element={<NotesUi />}/>
            <Route path="add" element={<AddNotesCard />}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </ErrorBoundary>
  </BrowserRouter>
)
