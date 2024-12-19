import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Capify Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/profile" className="hover:underline">
                  Profile
                </a>
              </li>
              <li>
                <a href="/settings" className="hover:underline">
                  Settings
                </a>
              </li>
              <li>
                <a href="/logout" className="hover:underline">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg text-zinc-800 font-semibold mb-4">Budget Tracker</h2>
            <p className="text-gray-700">View and manage your budgets here.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Go to Budget
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg text-zinc-800 font-semibold mb-4">Expense Tracker</h2>
            <p className="text-gray-700">Track your daily expenses effortlessly.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Go to Expenses
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg text-zinc-800 font-semibold mb-4">Financial Health</h2>
            <p className="text-gray-700">Take our financial health quiz to plan better.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Take Quiz
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Capify. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
    