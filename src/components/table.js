
export default function Table({ columns = [], rows = [] }) {
  return (
  <table class="table-auto">
    <thead>
        <tr>
          {columns.map(colname => <th>{colname}</th>)}
      </tr>
    </thead>
      <tbody>
      <tr>
          {rows.map(val => <tr><td>{val}</td></tr>)}
      </tr>
    </tbody>
  </table>
  )
}
