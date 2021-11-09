<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

Template of simple server on nest.

Server have cookie parser, but in template cookies haven't been used. This is just prepare

## Installation

```bash
$ npm i
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## config.json

You must create a `config.json` file in repository folder (for dev) or in /etc folder (for prod).

Template:

```json
{
	"host": {
		"IP": "",
		"PORT": 0000,
		"protocol": ""
	},
	"cron": {
		"taskLog": "* * * * * *"
	},
	"redis": {
		"host": "",
		"port": 0000
	},
}
```

## ormconfig.json

You must create a `ormconfig.json` file in repository folder (for dev) or in /etc folder (for prod).

Template:

```json
{
	"type": "",
	"host": "",
	"port": 0000,
	"username": "",
	"password": "",
	"database": "",
	"entities": ["src/**/*.entity{.ts,.js}"],
	"synchronize": false,
	"migrationsRun": false,
	"logging": true,
	"logger": "file",
	"migrations": ["src/database/migrations/**/*{.ts,.js}"],
	"cli": {
		"migrationsDir": "src/database/migrations"
	}
}
```

## License

Nest is [MIT licensed](LICENSE).
