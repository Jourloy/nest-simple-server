export namespace Config {
	interface Host {
		IP: string;
		PORT: number;
		protocol: 'http' | 'https';
	}
}