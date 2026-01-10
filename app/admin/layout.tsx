import { redirect } from 'next/navigation'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function AdminLayout(_props: {
  children: React.ReactNode
}) {
  // Admin panel is temporarily disabled
  redirect('/')
}
