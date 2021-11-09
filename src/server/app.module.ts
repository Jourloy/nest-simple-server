/* IMPORT */
import { ConfigurationModule } from '../configuration/configuration.module';
import { DatabaseModule } from '../database/database.module';
import { AppController } from './app.controller';
import { TaskModule } from '../task/task.module';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import configuration from 'src/configuration/configuration';
import { LoadFileMiddleware } from 'src/middleware/loadfiles.middleware';
import { MainBull } from 'src/bull/bull.module';

@Module({
	imports: [
		TaskModule,
		ConfigurationModule,
		DatabaseModule,
		ConfigModule,
		MainBull,
		ConfigModule.forRoot({
			load: [configuration],
		}),
		ScheduleModule.forRoot(),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { 
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(LoadFileMiddleware)
			.forRoutes('www');
	}
}
