import { NewsCard } from './NewsCard'

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
]

export function InTheNews({ newsItems = defaultNewsItems }: InTheNewsProps) {
  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-heading">
          In the News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              logo={item.logo}
              date={item.date}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
