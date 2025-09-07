import { redirect } from 'next/navigation'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: Implement authentication check
  // For now, allow access - will be replaced with Supabase auth check
  const isAuthenticated = true // Mock authentication

  if (!isAuthenticated) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}
