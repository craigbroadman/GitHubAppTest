# iPipeline AWS CDK Packages

## Steps to create repo

Install GitHub CLI and Configure https://cli.github.com/

### Initial setup

. Execute `\\CHLNAS05\Development\GitHubMigration\CreateBrandNewRepo.ps1` to create the repo in GitHub
. Clone the repo locally
. Follow https://nx.dev/getting-started/tutorials/integrated-repo-tutorial to setup an empty NX monorepo

### Add libraries

. Use NX to add `is-even` and `is-odd` libraries to the repo within `libs/{add name here}`

#### Setup publishing

. Add `publishConfig` (so that you can publish the library from your local machine) and `publish-package` target (for the NX command) to the `package.json` file each library:

```json
"publishConfig": {
    "@ipipeline:registry": "https://npm.pkg.github.com"
  },
```

```json
"publish-package": {
      "executor": "nx:run-commands",
      "options": {
        "commands": ["npm publish"],
        "cwd": "libs/{add name here}"
      }
    },
```

#### Setup code coverage

Run `npm install jest-junit --save-dev`

. Add coverageReportings and reporters to `jest.config.ts` files for each library:

```ts
coverageReporters: ['text', 'cobertura'],
reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './coverage/libs/{add name here}',
        outputName: 'unit-test-results.xml',
      },
    ],
```

#### Push changes to main

. push changes to main

### Setup CI/CD

. Execute `\\CHLNAS05\Development\GitHubMigration\SetupBrandNewRepo.ps1` to configure the repo with CODEOWNERS, GitHub Action Workflows, Semantic Versioning and a Pull Request Template
. Push changes to main and check GitHub Actions run successfully (BlackDuck may fail the first time, if so, re-run it!)
.	Execute `\\CHLNAS05\Development\GitHubMigration\SetupBranchProtectionRules.ps1` to setup Branch Protection Rules (can only be done by a GitHub Admin = Craig)

### Test CI/CD

. Create a new branch called ci/test
. Follow https://www.npmjs.com/package/@jscutlery/semver to install `jscutlery/semver` for the `is-even` and `is-odd` libraries so that they're independently versioned based on conventional-commits messages when they are affected by changes

[NOTE]
This will now enforce conventional commit messages for every commit (not just the title of the PR) ✅
