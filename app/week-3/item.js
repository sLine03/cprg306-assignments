
export default function Item(props){
    const {name, quantity, category} = props;

    return(
        <main>
            <div className="bg-slate-300 m-4 p-4 rounded-2xl w-80">
                <h3 className="text-2xl text-black font-bold">{name}</h3>
                <ul className="list-disc pl-4">
                    <li className="text-sm">Quantity: {quantity}</li>
                    <li className="text-sm">Category: {category}</li>
                </ul>
            </div>
        </main>
    );
}