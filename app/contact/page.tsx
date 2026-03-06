import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Contact | Discover M.E.T.',
  description:
    'Contact the current UC Berkeley M.E.T. Student Board leaders to learn more about what they do.',
}

const studentBoard = [
  {
    names: "Arissa Zheng (M.E.T. ‘27) & Vatsal Garg (M.E.T. ‘27)",
    role: 'Co-Presidents',
    email: 'met-pres@berkeley.edu',
  },
  {
    names: "Jaansi Parsa (M.E.T. ’28) & Samara Wijesekera (M.E.T. ’28)",
    role: 'Co-VPs of Marketing & Engagement',
    email: 'met-vp-mrktg-and-engagement@berkeley.edu',
  },
  {
    names: "Shreyash Goli (M.E.T. ‘28) & Aryan Mishra (M.E.T. ‘28)",
    role: 'Co-VPs of External Relations',
    email: 'met-vp-external-affairs@berkeley.edu',
  },
  {
    names: "Erfan Ballew (M.E.T. ‘28)",
    role: 'VP of Diversity, Equity, and Inclusion',
    email: 'met-vp-dei@berkeley.edu',
  },
  {
    names: "Aathma Muruganathan (M.E.T. ‘28) & Charlie Herbst (M.E.T. ‘28)",
    role: 'Co-VPs of Social Integration',
    email: 'met-vp-social@berkeley.edu',
  },
  {
    names: "Kedaar Nandan Rentachintala (M.E.T. ’28)",
    role: 'VP of Student Resources',
    email: 'met-vp-internal-affairs@berkeley.edu',
  },
  {
    names: "Siya Shah (M.E.T. ‘27) & Akarsh Tripathi (M.E.T. ’27)",
    role: 'Co-VPs of Finance',
    email: 'met-vp-finance@berkeley.edu',
  },
] as const

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] py-12">
      <div
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-6xl font-bold text-berkeley-blue mb-4 text-center font-heading">
              M.E.T. Student Board
            </h1>

            <div className="mx-auto mb-14 max-w-5xl">
              <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-10">
                <div className="w-full max-w-xl shrink-0 md:w-[440px]">
                  <Image
                    src="https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/gallery-images/Screenshot%202026-03-05%20at%209.46.19%20PM.png"
                    alt="M.E.T. Student Board"
                    width={1200}
                    height={1200}
                    className="h-auto w-full border border-border bg-white shadow-sm"
                    priority
                  />
                </div>

                <p className="text-xl text-gray-700 text-center md:text-left">
                  The M.E.T. Student Board serves as the premier representative
                  organization for the student body of UC Berkeley’s Management,
                  Entrepreneurship, &amp; Technology program. It fosters social
                  integration, professional development, academic excellence, and
                  outreach. Contact our current M.E.T. Student Board leaders to
                  learn more about what they do.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-berkeley-blue mb-6 font-heading">
              Current Student Board
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {studentBoard.map((member) => (
                <section key={`${member.email}-${member.role}`}>
                  <p className="text-lg font-semibold text-gray-900 leading-snug">
                    {member.names}
                  </p>
                  <p className="text-gray-800 mt-1 leading-snug">{member.role}</p>
                  <a
                    className="mt-2 inline-block underline text-berkeley-blue hover:text-california-gold transition-colors"
                    href={`mailto:${member.email}`}
                  >
                    {member.email}
                  </a>
                  <div className="mt-5 h-px w-full bg-border" />
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

