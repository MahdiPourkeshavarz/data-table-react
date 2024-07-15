/* eslint-disable react/prop-types */
import "./SearchBar.css"

export function SearchBar({onFilterChange, onMarriageChange}) {

  return (
    <div className="form">
      <input type="text" placeholder="Search Here" onChange={(e) => onFilterChange(e.target.value)} className="search"/>
      <label htmlFor="marriageState" className="toggle-label">
        Only Married People
        <input
          type="checkbox"
          id="marriageState"
          onChange={(e) => onMarriageChange(e.target.checked)}
          className="toggle-checkbox"
        />
        <span className="toggle-slider"></span>
      </label>
    </div>
  )
}