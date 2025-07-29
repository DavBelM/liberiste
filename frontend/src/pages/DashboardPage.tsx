

import React from 'react';
import { BookOpen, Users, Bookmark, Plus, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();

  const stats = [
    {
      name: 'Total Resources',
      value: '156',
      icon: BookOpen,
      color: 'bg-blue-500',
    },
    {
      name: 'Active Users',
      value: '42',
      icon: Users,
      color: 'bg-green-500',
    },
    {
      name: 'My Bookmarks',
      value: '23',
      icon: Bookmark,
      color: 'bg-purple-500',
    },
  ];

  const navLinks = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Resources', icon: BookOpen },
    { name: 'Bookmarks', icon: Bookmark },
    { name: 'Categories', icon: Users },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col justify-between h-screen fixed left-0 top-0 z-10">
        <div>
          <div className="flex items-center px-6 py-8">
            <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-blue-700">UniResource Hub</span>
          </div>
          <nav className="mt-8">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                    <link.icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="px-6 py-8 border-t mt-8">
          <div className="mb-2 text-sm text-gray-600">Welcome,</div>
          <div className="font-semibold text-gray-900 mb-4 truncate">{user?.first_name} {user?.last_name}</div>
          <button
            onClick={logout}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-10 overflow-y-auto min-h-screen">
        {/* Welcome Section */}
        <div className="mb-10 w-full flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.first_name}!</h2>
          <p className="text-gray-600 max-w-xl">Manage your learning resources and discover new content shared by your peers.</p>
        </div>

        {/* Dashboard Grid - single row below welcome */}
        <div className="w-full flex flex-col gap-8 xl:flex-row xl:gap-8 xl:items-start justify-center">
          {/* Stats */}
          <div className="flex-1 space-y-6 max-w-md w-full mx-auto xl:mx-0">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white rounded-lg shadow p-6 flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex-1 bg-white rounded-lg shadow p-6 w-full max-w-md mx-auto xl:mx-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-4">
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                <Plus className="h-6 w-6 text-gray-400 group-hover:text-blue-500 mr-2" />
                <span className="text-gray-600 group-hover:text-blue-500 font-medium">
                  Upload Resource
                </span>
              </button>
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group">
                <BookOpen className="h-6 w-6 text-gray-400 group-hover:text-green-500 mr-2" />
                <span className="text-gray-600 group-hover:text-green-500 font-medium">
                  Browse Resources
                </span>
              </button>
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group">
                <Bookmark className="h-6 w-6 text-gray-400 group-hover:text-purple-500 mr-2" />
                <span className="text-gray-600 group-hover:text-purple-500 font-medium">
                  View Bookmarks
                </span>
              </button>
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors group">
                <Users className="h-6 w-6 text-gray-400 group-hover:text-orange-500 mr-2" />
                <span className="text-gray-600 group-hover:text-orange-500 font-medium">
                  Manage Categories
                </span>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="flex-1 bg-white rounded-lg shadow p-6 w-full max-w-md mx-auto xl:mx-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 p-2 rounded-full">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    New resource "Machine Learning Fundamentals" was uploaded
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 p-2 rounded-full">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    3 new students joined the platform
                  </p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-500 p-2 rounded-full">
                  <Bookmark className="h-4 w-4 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    You bookmarked "Data Structures Guide"
                  </p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
