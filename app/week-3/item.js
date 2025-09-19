

export default function items(props){

    let {name, quantity, category} = props;

    return(
        <main>
            <div>
                <h3>{name}</h3>
                <ul>
                    <li>Quantity: {quantity}</li>
                    <li> Category: {category}</li>
                </ul>
            </div>
        </main>
    );
}