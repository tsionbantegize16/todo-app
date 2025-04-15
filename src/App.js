import React from 'react';
import TodosPage from './pages/TodosPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <TodosPage />
    </MainLayout>
  );
}

export default App;