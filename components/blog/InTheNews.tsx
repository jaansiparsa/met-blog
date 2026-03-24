import { NewsCard } from './NewsCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface NewsItem {
  logo: string
  date: string
  title: string
  link: string
}

interface InTheNewsProps {
  newsItems?: NewsItem[]
}

// Default sample news items - replace with real data from your CMS/database
const defaultNewsItems: NewsItem[] = [
  {
    logo: '/BusinessInsiderLogo.png',
    date: 'April 22, 2017',
    title: "An elite university is offering a fast-track program for tech leaders that's more competitive than Stanford",
    link: 'https://www.businessinsider.com/uc-berkeley-met-for-future-tech-leaders-2017-4',
  },
  {
    logo: '/EastBayTimesLogo.png',
    date: 'September 8, 2017',
    title: 'New UC Berkeley program aims to fast-track path to Silicon Valley C-Suites',
    link: 'https://www.eastbaytimes.com/2017/09/08/new-uc-berkeley-program-aims-to-fast-track-path-to-silicon-valley-c-suites/',
  },
  {
    logo: '/PoetsAndQuantsLogo.jpg',
    date: 'August 7, 2016',
    title: "UC-Berkeley Launches 'Navy Seal' Program For Future Tech Leaders",
    link: 'https://poetsandquantsforundergrads.com/news/uc-berkeley-launches-navy-seal-program-tech-leaders/2/',
  },
  {
    logo: '/BloombergLogo.png',
    date: 'March 8, 2019',
    title: 'The Fast Track to Being a CEO Engineer',
    link: 'https://www.bloomberg.com/news/articles/2019-03-08/the-fast-track-to-being-a-ceo-engineer',
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/NYSE_Logo_2022.svg',
    date: 'March 24, 2026',
    title: 'Prof. Chaudhari on how M.E.T. prepares students in the AI age',
    link: 'https://www.thecube.net/events/nyse/moe-series/content/Videos/c6f6b2c1-afc1-471c-90c9-30bdab72d828',
  },
]

export function InTheNews({ newsItems = defaultNewsItems }: InTheNewsProps) {
  const sortedNewsItems = [...newsItems].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })

  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-heading">
            In the News
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {sortedNewsItems.map((item, index) => (
            <ScrollReveal key={index}>
              <NewsCard
                logo={item.logo}
                date={item.date}
                title={item.title}
                link={item.link}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
