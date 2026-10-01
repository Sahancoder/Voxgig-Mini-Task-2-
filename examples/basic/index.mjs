import { Jostraca, Project, Folder, File, Content } from 'jostraca'

const jostraca = Jostraca({ model: { app: { name: 'acme' } } })

await jostraca.generate({ folder: './out' }, () => {
  Project({ folder: 'acme' }, () => {

    File({ name: 'package.json' }, () => {
      Content('{ "name": "$$app.name$$" }\n')
    })

    Folder({ name: 'src' }, () => {
      File({ name: 'index.js' }, () => {
        Content('console.log("$$app.name$$")\n')
      })
    })
  })
})
