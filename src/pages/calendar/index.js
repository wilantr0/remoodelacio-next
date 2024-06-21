/*const categories = [
  { name: 'Mates 1', teacher: 'Sara Santamaria', classCode: 'ab43e7' },
  { name: 'Fisica 2', teacher: 'Sara Santamaria', classCode: 'ab43e7' },
  { name: 'Castellano 1', teacher: 'Sara Santamaria', classCode: 'ab43e7' }
];*/

export default function Clanedar () {
  return (
    <aside>
      <form action='/api/tasks' method='post'>
        <input type='text' name='name' id='name' />
        <input type='password' name='password' id='password' />
        <button>Enviar</button>
      </form>
    </aside>
  );
}
