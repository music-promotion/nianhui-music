import { siteConfig } from '@/site.config'
import Link from 'next/link'
import { Music, Award, Gamepad2, Utensils, Gift, Sparkles, Calendar, Users, TrendingUp, ArrowRight, Play } from 'lucide-react'

const categoryIcons = {
  '开场音乐': Music,
  '颁奖环节': Award,
  '游戏互动': Gamepad2,
  '晚宴背景': Utensils,
  '抽奖环节': Gift,
  '闭幕曲': Sparkles,
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#ea580c]">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-6 right-6 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-purple-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-purple-900">{siteConfig.name}</h1>
              <p className="text-xs text-purple-600">{siteConfig.description}</p>
            </div>
          </div>
          <Link
            href="/articles"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all cursor-pointer"
          >
            浏览方案
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section - Diagonal Split Layout */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium">专业年会音乐策划</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                打造难忘的<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                  年会音乐体验
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                从开场到闭幕，为每个环节精选完美BGM<br />
                让企业年会更具仪式感与活力
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={siteConfig.targetProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-2xl hover:shadow-orange-500/50 cursor-pointer"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  AI 生成年会专属音乐
                </a>
                
                <Link
                  href="/articles"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-white border-2 border-white/30 hover:bg-white hover:text-purple-900 transition-all cursor-pointer"
                >
                  查看策划方案
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-orange-400">500+</div>
                  <div className="text-sm text-blue-200 mt-1">企业客户</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">1000+</div>
                  <div className="text-sm text-blue-200 mt-1">音乐方案</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">98%</div>
                  <div className="text-sm text-blue-200 mt-1">满意度</div>
                </div>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-600/20 to-orange-500/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-50"></div>
                
                <div className="relative space-y-4">
                  {['开场震撼', '颁奖庄重', '互动欢快', '晚宴优雅'].map((item, i) => (
                    <div key={item} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Music className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">{item}</div>
                        <div className="text-sm text-blue-200">专业音乐推荐</div>
                      </div>
                      <div className="w-16 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"
                          style={{ width: `${100 - i * 15}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Hexagonal Grid Layout */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">年会音乐场景</h3>
            <p className="text-xl text-blue-100">为每个环节量身定制的音乐方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.theme.categories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons] || Music
              return (
                <Link
                  key={category}
                  href="/articles"
                  className="group relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-purple-100 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-orange-500/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-orange-500/10 transition-all duration-300"></div>
                  
                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-purple-900">{category}</h4>
                    
                    <p className="text-purple-600 leading-relaxed">
                      专业音乐推荐与氛围营造方案
                    </p>
                    
                    <div className="flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                      查看方案
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Promotion - Spotlight Effect */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Spotlight effects */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">AI 音乐生成</span>
                </div>
                
                <h3 className="text-4xl font-bold">想要定制年会主题曲？</h3>
                
                <p className="text-orange-50 text-lg leading-relaxed">
                  {siteConfig.targetProduct.description}
                </p>
                
                <a 
                  href={siteConfig.targetProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all shadow-lg cursor-pointer"
                >
                  立即体验
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Calendar, text: '快速生成，3分钟出成品' },
                  { icon: Users, text: '多种风格，适配各类年会' },
                  { icon: TrendingUp, text: '专业品质，企业级音质' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sites - Minimal Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">相关推荐</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.relatedSites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white/95 backdrop-blur-sm rounded-2xl hover:bg-white transition-all border border-purple-100 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-purple-900 group-hover:text-purple-700">{site.name}</span>
                  <ArrowRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-12 px-6 bg-blue-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">{siteConfig.name}</span>
          </div>
          <p className="text-blue-200">© 2025 {siteConfig.name}. 专业年会音乐策划服务</p>
        </div>
      </footer>
    </div>
  )
}
