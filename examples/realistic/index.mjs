import { Jostraca, Project, Folder, File, Content } from 'jostraca'

const model = {
  services: [
    { name: 'UserService', methods: ['getUser', 'createUser'] },
    { name: 'ProductService', methods: ['getProduct', 'listProducts'] }
  ]
}

const jostraca = Jostraca({ model })

await jostraca.generate({ folder: './out' }, () => {
  Project({ folder: 'src' }, () => {
    
    // Generate a file for each service
    for (const service of model.services) {
      File({ name: `${service.name}.js` }, () => {
        Content(`// Generated Service: ${service.name}\n\n`)
        Content(`class ${service.name} {\n`)
        for (const method of service.methods) {
          Content(`  ${method}() {\n    throw new Error('Not implemented');\n  }\n`)
        }
        Content(`}\n\nmodule.exports = ${service.name};\n`)
      })
    }

    // Generate a single README
    File({ name: 'README.md' }, () => {
      Content('# Services Overview\n\n')
      for (const service of model.services) {
        Content(`- **${service.name}**: ${service.methods.join(', ')}\n`)
      }
    })
  })
})
