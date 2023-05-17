import styles from './page.module.css'


// I've opted this page out of static rendering via 'no-store'
// getData happens on the server, because I _also_ don't have 'use client'
// getData has access to process.env (and could look up api host env)

const getData = async () => {
  console.log('process.env', process.env.FOO)

  const resp = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

  return Promise.resolve({
    'foo': process.env.FOO,
    'other': 1,
  })
}


export default async function Home() {
  const dataData = getData();

  const data = await dataData;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        myVar: {data.foo} {data.other}
      </div>
    </main>
  )
}
