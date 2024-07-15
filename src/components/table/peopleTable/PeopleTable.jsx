/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { PeopleRow } from "./peopleRow/PeopleRow"
import "./PeopleTable.css"


export function PeopleTable({people}) {
  return (
    <>
      <table>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
        </thead>
        <tbody>
          {
            people.map((person) => {
              return <PeopleRow key={person.id} {...person}/>
            })
          }
        </tbody>
      </table>
    </>
  )
}