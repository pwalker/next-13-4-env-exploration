import { Data } from './Data'
import { getData } from './getData'

// If we useQuery, even though we're dynamically rendering the page.tsx, since the Data component is client-side, we don't have access to environment variables.  So no api-host

export default async function QueryPage() {
  const initialData = await getData()

  return <Data posts={initialData} />
}
