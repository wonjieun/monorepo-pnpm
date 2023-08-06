# monorepo-pnpm

```
mkdir monorepo-pnpm
cd monorepo-pnpm
pnpm init
touch pnpm-workspace.yaml
mkdir apps/
```

https://pnpm.io/workspaces

### server

```
cd apps/
pnpm i -g @nestjs/cli
nest new server
cd server
pnpm start
```

https://docs.nestjs.com/first-steps

### web

```
pnpx create-next-app@latest
cd web
pnpm dev
```

https://nextjs.org/learn/basics/create-nextjs-app/setup
