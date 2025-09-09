import Link from "next/link";

export default function StudentInfo(){

    return(
        <div>
            <p>Name: Celine T</p>
            <Link className="text-cyan-600 underline hover:text-cyan-300" href="https://github.com/sLine03/cprg306-assignments">GitHub Repo</Link>
        </div>
    );
}