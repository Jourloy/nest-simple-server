import { NestFactory } from '@nestjs/core';
import { ConfigurationService } from './configuration/configuration.service';
import { AppModule } from './server/app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(cookieParser());
	
	const config = app.get(ConfigurationService);
	const host = config.host;
	await app.listen(host.PORT);
}
bootstrap();
