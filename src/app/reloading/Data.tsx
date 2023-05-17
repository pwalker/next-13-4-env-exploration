import styles from "../page.module.css";
import { getData } from "./getData";

export async function Data() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        myVar: {data.foo} {data.other} {data.count}
      </div>
    </main>
  );
}
