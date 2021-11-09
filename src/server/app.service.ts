import { Inject, Injectable } from '@nestjs/common';
import * as fs from "fs";

@Injectable()
export class AppService {
	constructor() {}

	getHello(): string {
		return 'Hello World!';
	}
}
