/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SearchBar } from "./searchBar/SearchBar"
import "./FilterableTable.css"
import { PeopleTable } from "./peopleTable/PeopleTable"
import { useState } from "react"


export function Table({ people }) {
  const [searchKey, setSearchKey] = useState("");
  const [filterMarried, setFilterMarried] = useState(false);
  let filteredPeople = people.filter((person) => person.name.includes(searchKey));
  if (filterMarried) {
    filteredPeople = filteredPeople.filter((person) => person.isMarried);
  }
  return (
    <>
      <SearchBar onFilterChange={(text)=> setSearchKey(text)} onMarriageChange={(checked)=> setFilterMarried(checked)}/>
      <PeopleTable people={filteredPeople}/>
    </>
  )
}