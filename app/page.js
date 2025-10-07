import Link from "next/link";

export default function Home(){

    let linkStyles = "text-cyan-600 underline hover:text-cyan-300";

  return(
  <main>
    <h1>CPRG306 Assignments</h1>
    <ul>
      <li>
        <Link className={linkStyles} href="./week-2">Week 2 Assignment</Link>
      </li>
      <li>
        <Link className={linkStyles} href="./week-3">Week 3 Assignment</Link>
      </li>
      <li>
        <Link className={linkStyles} href="./week-4">Week 4 Assignment</Link>
      </li>
      <li>
        <Link className={linkStyles} href="./week-5">Week 5 Assignment</Link>
      </li>
    </ul>
  </main>


  );
}