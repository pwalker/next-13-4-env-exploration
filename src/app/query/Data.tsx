'use client'

import styles from '../page.module.css'
import { useQuery } from '@tanstack/react-query'
import { getData } from './getData'

export function Data(props: { posts: any }) {
  const { data } = useQuery({
    queryKey: ['get-data'],
    queryFn: getData,
    initialData: props.posts,
  })

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        myVar: {data.foo} {data.other}
      </div>
    </main>
  )
}