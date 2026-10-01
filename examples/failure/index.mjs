import { Jostraca, Project, Folder, File, Content } from 'jostraca'

const jostraca = Jostraca({ model: null })

await jostraca.generate({ folder: './out' }, () => {
  Project({ folder: 'src' }, () => {
    File({ name: 'test.js' }, () => {
      Content('// test')
    })
  })
})
