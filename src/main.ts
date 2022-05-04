import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { valOptions } from './config';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(helmet());
  // app.use(csurf());
  app.enableCors();
  // TODO: remove unused dependencies
  // TODO: logging on route hit success and failures
  app.useGlobalPipes(new ValidationPipe(valOptions));

  // TODO: have api routes with "api" prefix
  // TODO: jsdoc syntax
  const config = new DocumentBuilder()
    .setTitle('Viking Sasquatch Backend')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);
  await app.listen(8080);
}
bootstrap();
