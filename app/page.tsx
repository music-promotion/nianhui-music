import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      {/* Header */}
      <header className="border-b border-blue-700/50 bg-blue-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            🎭 {siteConfig.name}
          </h1>
          <p className="text-sm text-blue-200 mt-1">{siteConfig.description}</p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              打造难忘的年会音乐体验
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              从开场到闭幕，为每个环节精选完美BGM，让企业年会更具仪式感与活力
            </p>
            
            {/* CTA */}
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105"
            >
              🎵 AI 生成年会专属音乐
            </a>
          </div>

          {/* Categories - 舞台风格卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {siteConfig.theme.categories.map((category, index) => {
              const icons = ['🎬', '🏆', '🎮', '🍽️', '🎁', '🎊']
              return (
                <Link
                  key={category}
                  href="/articles"
                  className="group relative bg-gradient-to-br from-blue-800/90 to-blue-900/90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-blue-600/30 hover:border-orange-500/50 backdrop-blur-sm overflow-hidden"
                >
                  {/* 舞台光效背景 */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 via-orange-500/0 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{icons[index]}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{category}</h3>
                    <p className="text-sm text-blue-200 group-hover:text-orange-200 transition-colors">
                      查看音乐方案
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* 文章入口 */}
          <div className="text-center mb-12">
            <Link
              href="/articles"
              className="inline-block bg-white/10 backdrop-blur-sm px-10 py-4 rounded-xl font-bold text-white border-2 border-white/30 hover:bg-white hover:text-blue-900 transition-all shadow-lg"
            >
              📚 浏览所有策划方案
            </Link>
          </div>

          {/* Product Promotion - 舞台聚光灯效果 */}
          <div className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 rounded-2xl p-10 text-white mb-12 shadow-2xl overflow-hidden">
            {/* 聚光灯效果 */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">🎤 想要定制年会主题曲？</h3>
              <p className="mb-6 text-orange-50 text-lg">
                {siteConfig.targetProduct.description}
              </p>
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-lg"
              >
                立即体验 →
              </a>
            </div>
          </div>

          {/* Related Sites */}
          <div className="border-t border-blue-700/50 pt-8">
            <h3 className="text-lg font-semibold text-white mb-4">相关推荐</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-800/50 backdrop-blur-sm rounded-xl hover:bg-blue-700/50 transition-colors border border-blue-600/30"
                >
                  <span className="text-sm font-medium text-white">{site.name}</span>
                  <span className="text-xs text-blue-300 block mt-1">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-700/50 mt-16 py-8 bg-blue-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-blue-200">
          <p>{siteConfig.name} © 2025</p>
        </div>
      </footer>
    </div>
  )
}
