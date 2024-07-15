/* eslint-disable react/prop-types */


export function PeopleRow({name, age, country, isMarried}) {

  return (
    <tr className={`${age > 18 ? "green" : "blue"}`}>
      <td className={`${isMarried ? "married" : ""}`}>{name}</td>
      <td>{age}</td>
      <td>{country}</td>
    </tr>
  )
}