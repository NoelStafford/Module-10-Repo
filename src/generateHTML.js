function generateHTML(teamMembers) {
  const header = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Team Builder</title>
    </head>

  <body class="flex flex-col h-screen justify-between">

  header class="p-8 bg-rose-700 mb-6">
        <h1 class="text-white text-center text-5xl"><a href="./test.html"
                class="hover:text-slate-200 ease-in-out duration-200"><i class="fa-solid fa-people-group"></i></a> Team Builder
        </h1>
    </header>
    <main>
        <section id="aside-top" class="flex flex-wrap m-2 gap-auto justify-around">
    `;
    const footer = `
        </section>
    </main>
    </body>
</html>
    `;
// makes the manager card
const generateManager = (manager) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${manager.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id} </li>
      <li class="list-group-item">Email:<a target="__blank" href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office Number:${manager.officenumber}</li>
    </ul>
  </div>`
}
// makes the intern card
const generateIntern = (intern) => {
   return `<div class="card" style="width: 18rem;">
  <div class="card-header">
  ${intern.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email:<a target="__blank" href="mailto:${intern.email}">${intern.email}</a> </li>
    <li class="list-group-item">School:${intern.school} </li>
  </ul>
</div>`
}
const generateEngineer = (engineer) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${engineer.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: <a target="__blank" href="mailto:${engineer.email}">${engineer.email}</a> </li>
      <li class="list-group-item">Github: <a target="__blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
  </div>`
}
}

module.exports = generateHTML;