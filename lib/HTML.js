class HTML {
    render(manager, engineers, interns) {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employee Contact Page</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        </head>
        <body>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container justify-content-around">
                  <a class="navbar-brand" href="#">Employee Contact Page</a>
                </div>
              </nav>
              <div class="container d-flex justify-content-around mt-3">
                  <div class="card m-1" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${manager.name}: Manager 🤠</h5>
                      <p class="card-text">ID number: ${manager.id}</p>
                      <p class="card-text">Email: ${manager.email}</p>
                      <p class="card-text">Office Number: ${manager.officeNumber}</p>
                    </div>
                  </div>
                  ${engineers.map((engineer) => this.renderEngineerBlock(engineer)).join("")}

                  ${interns.map((intern) => this.renderInternBlock(intern)),join("")}
              </div>
        </body>
        </html>`
    }

    renderEngineerBlock(engineer) {
        return `<div class="card m-1" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}: Engineer 🛠</h5>
          <p class="card-text">ID number: ${engineer.id}</p>
          <p class="card-text">Email: ${engineer.email}</p>
          <a href="https://github.com/${engineer.github}" class="btn btn-primary">${engineer.name}'s Github</a>
        </div>
      </div>`
    }

    renderInternBlock(intern) {
        return `<div class="card m-1" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${intern.name}: Intern 👶</h5>
          <p class="card-text">ID number: ${intern.id}</p>
          <p class="card-text">Email: ${intern.email}</p>
          <p class="card-text">School: ${intern.school}</p>
        </div>
      </div>`
    }
}

module.exports = HTML;