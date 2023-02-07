export default function Beer ({ beer }){

    return (
        <tr id={`beer-${beer.id}`}>
            <td width={150}>{beer.name}</td>
            <td width={150}>{beer.temperature}</td>
            <td width={150}>
            {beer.temperature <
                beer.minimumTemperature && <span>too low</span>}
            {beer.temperature >
                beer.maximumTemperature && <span>too high</span>}
            {beer.temperature <=
                beer.maximumTemperature &&
                beer.temperature >=
                beer.minimumTemperature && <span>all good</span>}
            </td>
        </tr>    );
}