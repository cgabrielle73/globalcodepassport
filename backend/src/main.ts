import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3001;
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

  app.enableCors({
    origin: frontendUrl, 
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });
  await app.listen(port);
}
bootstrap();