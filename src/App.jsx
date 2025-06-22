// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import { ItemsProvider } from '@/context/ItemsContext';
import ViewItems from '@/pages/ViewItems';
import AddItem from '@/pages/AddItem';
import NavLink from './components/NavLink';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <ItemsProvider>
        <div className="min-h-screen bg-gray-50">
          {/* Navigation Bar */}
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-xl font-bold">AMRR TechSols</h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <NavLink
                      to="/"
                      className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      View Items
                    </NavLink>
                    <NavLink
                      to="/add"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Add Items
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<ViewItems />} />
                <Route path="/add" element={<AddItem />} />
              </Routes>
            </div>
          </main>
        </div>
        <Toaster />
    </ItemsProvider>
  );
}