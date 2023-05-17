// app/providers.jsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

export default function Providers({ children, env }: {children: React.ReactNode, env: any}) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}