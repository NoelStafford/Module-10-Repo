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

