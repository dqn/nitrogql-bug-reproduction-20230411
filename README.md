# nitrogql-bug-reproduction-20230411

## Bug explanation

`npx nitrogql check` command causes errors or does not complete when a specific directories/files exist.

## Reproduction

```bash
$ yarn
$ npx nitrogql check
```

## My environment

### Environment 1

- Operating System:
  - Platform: darwin
  - Arch: x64
  - Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:42:11 PST 2023; root:xnu-8792.81.3~2/RELEASE_X86_64
- Binaries:
  - Node: 19.8.1
  - Yarn: 1.22.19

### Environment 2

- Operating System:
  - Platform: win32
  - Arch: x64
  - Version: Windows 10 Home
- Binaries:
  - Node: 18.8.0
  - Yarn: 1.22.19
