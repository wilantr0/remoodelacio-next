export default function ClassCard ({ link, name, teacher }) {
  return (
    <a
      href={`/c/${link}`}
      class='rounded-lg border bg-card text-card-foreground shadow-lg'
      data-v0-t='card'
    >
      <div class='p-6'>
        <div class='flex items-center justify-between'>
          <h3 class='text-lg font-bold'>{name}</h3>
        </div>
        <p class='text-muted-foreground'>{teacher}</p>
      </div>
      <div class='flex items-center p-6'>
        <button class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full'>
          View Class
        </button>
      </div>
    </a>
  );
}
