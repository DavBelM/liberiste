import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Download, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck,
  FileText,
  Link as LinkIcon,
  Calendar,
  User,
  Tag,
  ChevronDown
} from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'file' | 'link';
  uploadedBy: string;
  uploadedAt: string;
  category: string;
  tags: string[];
  isBookmarked: boolean;
  fileSize?: string;
}

export const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data
  const resources: Resource[] = [
    {
      id: 1,
      title: 'Machine Learning Fundamentals',
      description: 'Comprehensive guide to machine learning concepts and algorithms',
      type: 'file',
      uploadedBy: 'John Doe',
      uploadedAt: '2 hours ago',
      category: 'Computer Science',
      tags: ['ML', 'AI', 'Python'],
      isBookmarked: true,
      fileSize: '2.5 MB'
    },
    {
      id: 2,
      title: 'Data Structures Tutorial',
      description: 'Interactive tutorial on data structures and algorithms',
      type: 'link',
      uploadedBy: 'Jane Smith',
      uploadedAt: '5 hours ago',
      category: 'Programming',
      tags: ['Data Structures', 'Algorithms'],
      isBookmarked: false
    },
    {
      id: 3,
      title: 'Statistics Cheat Sheet',
      description: 'Quick reference for statistical formulas and concepts',
      type: 'file',
      uploadedBy: 'Mike Johnson',
      uploadedAt: '1 day ago',
      category: 'Mathematics',
      tags: ['Statistics', 'Math'],
      isBookmarked: false,
      fileSize: '1.2 MB'
    }
  ];

  const categories = ['All', 'Computer Science', 'Programming', 'Mathematics', 'Physics', 'Chemistry'];
  const resourceTypes = ['All', 'Files', 'Links'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || 
                       (selectedType === 'files' && resource.type === 'file') ||
                       (selectedType === 'links' && resource.type === 'link');
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const toggleBookmark = (id: number) => {
    // TODO: Implement bookmark toggle API call
    console.log('Toggle bookmark for resource:', id);
  };

  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              resource.type === 'file' ? 'bg-blue-100' : 'bg-green-100'
            }`}>
              {resource.type === 'file' ? (
                <FileText className={`h-6 w-6 ${resource.type === 'file' ? 'text-blue-600' : 'text-green-600'}`} />
              ) : (
                <LinkIcon className="h-6 w-6 text-green-600" />
              )}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{resource.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{resource.description}</p>
            </div>
          </div>
          <button
            onClick={() => toggleBookmark(resource.id)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {resource.isBookmarked ? (
              <BookmarkCheck className="h-5 w-5 text-blue-600" />
            ) : (
              <Bookmark className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{resource.uploadedBy}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{resource.uploadedAt}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {resource.category}
          </span>
          <div className="flex items-center space-x-2">
            {resource.fileSize && (
              <span className="text-xs text-gray-500">{resource.fileSize}</span>
            )}
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              {resource.type === 'file' ? (
                <>
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </>
              ) : (
                <>
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Open
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ResourceListItem = ({ resource }: { resource: Resource }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 min-w-0">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            resource.type === 'file' ? 'bg-blue-100' : 'bg-green-100'
          }`}>
            {resource.type === 'file' ? (
              <FileText className="h-5 w-5 text-blue-600" />
            ) : (
              <LinkIcon className="h-5 w-5 text-green-600" />
            )}
          </div>
          <div className="ml-4 flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 truncate">{resource.title}</h3>
            <p className="text-xs text-gray-600 truncate">{resource.description}</p>
            <div className="flex items-center mt-1 text-xs text-gray-500">
              <span>{resource.uploadedBy}</span>
              <span className="mx-2">•</span>
              <span>{resource.uploadedAt}</span>
              <span className="mx-2">•</span>
              <span>{resource.category}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={() => toggleBookmark(resource.id)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {resource.isBookmarked ? (
              <BookmarkCheck className="h-4 w-4 text-blue-600" />
            ) : (
              <Bookmark className="h-4 w-4 text-gray-400" />
            )}
          </button>
          <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            {resource.type === 'file' ? (
              <>
                <Download className="h-3 w-3 mr-1" />
                Download
              </>
            ) : (
              <>
                <ExternalLink className="h-3 w-3 mr-1" />
                Open
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resources</h1>
        <p className="text-gray-600">Browse and search through all available learning resources</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-l-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-r-lg transition-colors ${
                  viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resource Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {resourceTypes.map((type) => (
                    <option key={type} value={type.toLowerCase()}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-600">
          Showing {filteredResources.length} of {resources.length} resources
        </p>
      </div>

      {/* Resources Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredResources.map((resource) => (
            <ResourceListItem key={resource.id} resource={resource} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};