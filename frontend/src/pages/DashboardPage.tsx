import React from 'react';
import { BookOpen, Users, Bookmark, Plus } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">UniResource Hub</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user?.first_name} {user?.last_name}
              </span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.first_name}!
          </h2>
          <p className="text-gray-600">
            Manage your learning resources and discover new content shared by your peers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <div className="bg-white rounded-lg shadow p-6">
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
      </main>
    </div>
  );
};
