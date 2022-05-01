import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  // app.use(csurf());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Viking Sasquatch Backend')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);
  await app.listen(3000);
}
bootstrap();
