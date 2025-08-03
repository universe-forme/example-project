import Image from "next/image";

export default function Home() {


  return (
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">📚</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">BookHub</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Browse</a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Categories</a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
                </div>
              </div>
              <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </nav>

        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Discover Your Next
                <span className="text-blue-600 block">Great Read</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore thousands of books, connect with fellow readers, and embark on literary adventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                  Browse Books
                </button>
                <button
                    className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-2xl">📖</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
                <div className="text-gray-600">Books Available</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-2xl">👥</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100,000+</div>
                <div className="text-gray-600">Active Readers</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-2xl">📈</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">2M+</div>
                <div className="text-gray-600">Books Read</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Books</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of must-read books across various genres
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-6xl">📚</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">The Midnight Library</h3>
                  <p className="text-gray-600 text-sm mb-2">Matt Haig</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                    <span className="text-blue-600 font-semibold">$12.99</span>
                  </div>
                  <button
                      className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-6xl">📖</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Atomic Habits</h3>
                  <p className="text-gray-600 text-sm mb-2">James Clear</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">4.9</span>
                    </div>
                    <span className="text-blue-600 font-semibold">$14.99</span>
                  </div>
                  <button
                      className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white text-6xl">📕</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Dune</h3>
                  <p className="text-gray-600 text-sm mb-2">Frank Herbert</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">4.7</span>
                    </div>
                    <span className="text-blue-600 font-semibold">$16.99</span>
                  </div>
                  <button
                      className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-6xl">📗</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">The Seven Husbands of Evelyn Hugo</h3>
                  <p className="text-gray-600 text-sm mb-2">Taylor Jenkins Reid</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                    <span className="text-blue-600 font-semibold">$13.99</span>
                  </div>
                  <button
                      className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get notified about new book releases, exclusive deals, and reading recommendations
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 bg-blue-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">📚</span>
                  </div>
                  <span className="ml-2 text-xl font-bold">BookHub</span>
                </div>
                <p className="text-gray-300">
                  Your gateway to endless literary adventures and meaningful connections with fellow book lovers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white">Browse Books</a></li>
                  <li><a href="#" className="hover:text-white">Categories</a></li>
                  <li><a href="#" className="hover:text-white">New Releases</a></li>
                  <li><a href="#" className="hover:text-white">Bestsellers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Community</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white">Book Clubs</a></li>
                  <li><a href="#" className="hover:text-white">Reviews</a></li>
                  <li><a href="#" className="hover:text-white">Author Events</a></li>
                  <li><a href="#" className="hover:text-white">Reading Challenges</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white">Help Center</a></li>
                  <li><a href="#" className="hover:text-white">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2025 BookHub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  );
}
