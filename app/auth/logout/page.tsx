'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    const logout = async () => {
      const supabase = createClient()
      await supabase.auth.signOut()
      router.push('/')
      router.refresh()
    }
    logout()
  }, [router])

  return (
    <div className="container mx-auto px-4 py-12">
      <p>Logging out...</p>
    </div>
  )
}


