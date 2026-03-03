import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/site.config'
import Link from 'next/link'
import { Music, Calendar, ArrowRight, Search, Filter } from 'lucide-react'

export default function ArticlesPage() {
  const articles = getAllArticles()
  
  // 按分类分组
  const categories = Array.from(new Set(articles.map(a => a.category)))
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-6 right-6 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-purple-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-purple-900">{siteConfig.name}</h1>
              <p className="text-xs text-purple-600">年会音乐策划方案</p>
            </div>
          </Link>
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all cursor-pointer"
          >
            返回首页
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Filter className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-900">专业策划方案</span>
          </div>
          
          <h1 className="text-5xl font-bold text-purple-900 mb-4">
            年会音乐策划方案库
          </h1>
          <p className="text-xl text-purple-600 max-w-2xl mx-auto">
            精选各类年会场景的音乐推荐与氛围营造指南
          </p>
        </div>
      </section>

      {/* Category Navigation - Horizontal Scroll */}
      <section className="px-6 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map(category => (
              <a
                key={category}
                href={`#${category}`}
                className="flex-shrink-0 px-6 py-3 bg-white border-2 border-purple-200 text-purple-700 rounded-xl font-semibold hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all cursor-pointer shadow-sm"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles by Category - Timeline Layout */}
      <main className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          {categories.map((category, catIndex) => {
            const categoryArticles = articles.filter(a => a.category === category)
            return (
              <div key={category} id={category} className="mb-20">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-purple-900">{category}</h2>
                    <p className="text-purple-600">共 {categoryArticles.length} 篇方案</p>
                  </div>
                  <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full"></div>
                </div>

                {/* Articles Grid - Staggered Layout */}
                <div className="grid md:grid-cols-2 gap-6">
                  {categoryArticles.map((article, index) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-purple-100 overflow-hidden cursor-pointer"
                      style={{
                        transform: index % 2 === 0 ? 'translateY(0)' : 'translateY(1rem)',
                      }}
                    >
                      {/* Gradient accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-orange-500"></div>
                      
                      <div className="p-8">
                        {/* Date badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-lg mb-4">
                          <Calendar className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium text-purple-900">{article.date}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-purple-900 mb-3 group-hover:text-purple-700 transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-purple-600 leading-relaxed mb-6">
                          {article.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                          阅读完整方案
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-orange-500/0 group-hover:from-purple-600/5 group-hover:via-purple-600/3 group-hover:to-orange-500/5 transition-all pointer-events-none"></div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </main>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="relative bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-300/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-4xl font-bold">需要定制专属年会音乐？</h3>
              <p className="text-xl text-purple-50 max-w-2xl mx-auto">
                使用 AI 音乐生成工具，3分钟创作企业专属主题曲
              </p>
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-lg cursor-pointer"
              >
                立即体验 AI 音乐生成
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-200 py-12 px-6 bg-purple-50">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-purple-900">{siteConfig.name}</span>
          </div>
          <p className="text-purple-600">© 2025 {siteConfig.name}. 专业年会音乐策划服务</p>
        </div>
      </footer>
    </div>
  )
}
