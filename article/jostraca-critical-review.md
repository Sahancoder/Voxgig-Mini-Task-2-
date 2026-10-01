# I Tested Jostraca's Approach to Code Generation — Here Are the Trade-offs

## 1. Opening

Generating a source file once is easy. Generating it again after a developer has manually modified it is much harder. Many scaffolding tools solve the initial bootstrapping problem but leave you completely exposed when the underlying data model changes and you need to resync your codebase. This gap in the ecosystem is why Jostraca, an open-source template generator built by Voxgig, caught my attention. It claims to let you regenerate over hand-edited code without clobbering it. I decided to build a small reproducible test project to see if its two-phase generation approach actually delivers on this promise and evaluate what trade-offs it requires.

## 2. What Jostraca Is

At its core, Jostraca is a code and project generator that uses React-style components (`Project`, `Folder`, `File`, `Content`) to define file trees declaratively. Unlike traditional templating engines (like Handlebars or EJS) that force you to learn a domain-specific language (DSL), Jostraca leverages the host language (JavaScript/TypeScript). You use standard `for` loops to iterate and `if` statements to branch logic. 

Voxgig uses Jostraca as the underlying engine for their SDK Generator. Its primary value proposition is that it splits execution into a define phase and a build phase, theoretically allowing it to merge, diff, or preserve hand-edited code when running the generator a second time.

## 3. Getting It Running

I set up a clean Node.js (v22.14.0) environment on Windows and ran the installation command: `npm install jostraca`. The installation was seamless, completing in just 1.79 seconds without any peer dependency warnings or cryptic post-install script failures. The only peer dependency, `shape`, was installed automatically by npm.

For my first test, I grabbed the smallest official example from their documentation. It involves passing a JSON model (`{ app: { name: 'acme' } }`) into the generator to create a `package.json` and a `src/index.js` file. The execution was straightforward. I ran `node index.mjs`, and it successfully generated the expected directory tree (`out/acme`). The setup was completely intuitive; there was no complex configuration file or hidden state to manage.

## 4. Code Example

To move beyond the basics, I created a custom generator mimicking a real-world scenario: scaffolding multiple services based on a single JSON definition.

```javascript
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
    
    // Generate a file for each service using native JS loops
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
  })
})
```

This snippet takes the `services` array and dynamically produces a separate JavaScript class file for each one. The developer experience here is excellent. Because there is no custom template syntax, I could rely entirely on standard JavaScript arrays and string interpolation. The abstraction maps perfectly to how developers already think about loops and variables. When I ran this, Jostraca correctly outputted `UserService.js` and `ProductService.js` exactly as defined.

## 5. The Important Test: Running It Again

The biggest claim Jostraca makes is its ability to handle regeneration gracefully. To test this, I opened the generated `UserService.js` and manually modified the `getUser` method to include custom logic:

```javascript
  getUser() {
    // CUSTOM CHANGE MADE BY HAND
    throw new Error('Not implemented');
  }
```

I saved the file and ran the generator again (`node index.mjs`). When I inspected the output, my manual change was completely gone. Jostraca had overwritten the file and restored it to the original generated state. There was no warning, no diff produced, and no merge attempted.

While the documentation states that Jostraca can preserve hand-edited code via "templates, slots, injections, protected regions, and three-way merges," my test proved that naive usage of the `Content` component does not protect your files by default. To safely regenerate code, developers must explicitly opt into these preservation strategies. For a newcomer, assuming that Jostraca magically protects local edits simply because it maintains a `.jostraca` metadata folder is a dangerous trap that could lead to lost work.

## 6. What Worked Well

Jostraca's API design is undeniably strong. By treating files and folders as functions, the mental model is incredibly easy to grasp. You do not have to leave JavaScript to define your templates, which means your IDE's syntax highlighting, linting, and autocomplete continue to work flawlessly. 

The error handling is also a major highlight. To test failure modes, I intentionally broke the configuration by passing `model: null`. Instead of failing with a cryptic stack trace deep inside a string manipulation function, Jostraca returned an explicit `ShapeError` stating: `Validation failed for property "model" with value "null" because the value is not of type object.` It identified the exact problem and the line of code responsible, saving valuable debugging time.

## 7. Where It Fell Short

The primary friction point lies in the gap between the library's promises and its default behavior. The marketing material heavily emphasizes the ability to preserve hand-edited code, but the basic examples do not demonstrate how to achieve this safely. 

When I attempted regeneration, the silent overwrite of my custom changes was alarming. A developer unfamiliar with the internal model would likely expect the tool to at least warn them before clobbering a modified file, especially since it writes a `.jostraca` tracking folder to the output directory. To utilize the true power of Jostraca's regeneration features, you must dive deeper into the documentation to understand components like `Slot` and `Inject`. This creates a steeper learning curve for the very feature that sets the tool apart from basic templating scripts.

## 8. What I Would Change

Jostraca would benefit significantly from a clearer quick-start guide that explicitly addresses the regeneration workflow. The basic tutorial should immediately introduce `Slot` or `Inject` alongside `Content` to establish safe patterns from day one. Additionally, implementing an optional safe mode that produces warnings or diffs when a developer attempts to overwrite a manually modified file without explicit permission would prevent a lot of frustration and data loss.

## 9. Who It Is For

Jostraca is highly valuable for developers building SDK generators, internal scaffolding CLI tools, or complex boilerplates where multiple interdependent files must be kept in sync based on a single source of truth. It excels in environments where the output structure is heavily dynamic and relies on complex logic. However, developers who only need a one-time project bootstrapping tool will find Jostraca unnecessary; basic string interpolation is perfectly adequate for those use cases.

## 10. Conclusion

After testing it, I can see why Voxgig relies on Jostraca for their SDK generation. The decision to abandon domain-specific templating languages in favor of native JavaScript control structures removes a significant layer of cognitive overhead. While the default overwrite behavior during regeneration requires careful navigation, the overall architectural approach—combining declarative file definitions with a two-phase execution cycle—is a highly effective solution for maintaining complex generated codebases over time.
