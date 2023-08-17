interface IConfig {
  port: number
}

export const config: IConfig = {
  port: process.env.PORT ? Number(process.env.PORT) : 5314
}
