import { createClient } from '@/lib/supabase/server'
import { requireAdmin } from '@/lib/utils/auth'
import type { User } from '@/lib/types/database'

export default async function AdminUsersPage() {
  await requireAdmin()
  const supabase = await createClient()

  const { data: users } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">
                Joined
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users?.map((user: User) => (
              <tr key={user.id}>
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4 text-muted">
                  {/* Email would need to be fetched from auth.users */}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      user.role === 'admin'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-muted text-sm">
                  {new Date(user.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {(!users || users.length === 0) && (
          <div className="text-center py-12 text-muted">No users found.</div>
        )}
      </div>
    </div>
  )
}


