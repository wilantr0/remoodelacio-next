const categories = [
  { name: 'Mates 1', teacher: 'Sara Santamaria', classCode: 'ab43e7' },
  { name: 'Fisica 2', teacher: 'Sara Santamaria', classCode: 'ab43e7' },
  { name: 'Castellano 1', teacher: 'Sara Santamaria', classCode: 'ab43e7' }
]

export default function Clanedar () {
  return (
    <aside>
      <header>
        <button>Crear</button>
      </header>
      <main>
        <ul id='categories'>
          {categories.map(e => {
            return (
              <li key={e}>
                <a href={`/clases/${e.classCode}`}>{e.name}</a>
              </li>
            )
          })}
        </ul>
      </main>
    </aside>
  )
}
