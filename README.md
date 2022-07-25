# OpenApi Test

Showcase OpenApi code generation for Angular based on dotnet WebApi in a nx monorepo.

## Installation

Run `npm install` to install dependencies.
 
## Usage

Run Angular app:

```bash
nx serve app
```

Run dotnet api:

```bash
nx serve api
```

Generate OpenApi specs:

```bash
nx swagger api
```

Generate Angular code based on specs:

```bash
npm run openapi-generate
```
