import ItemList from "./item-list";

export default function page(){


    return(
        <main>
         <li>
        <Link className="text-cyan-600 underline hover:text-cyan-300" href="cprg306-assignments\app\page.js">Back</Link>
        </li>
            <h1 className="text-5xl text-left">Shopping List</h1>
            <ItemList />
        </main>
    );
}