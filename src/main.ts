import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { apiReference } from '@scalar/nestjs-api-reference';
import { Logger } from './lib/logger';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_CONFIG } from './config';

const logger = new Logger('Bootstrap');
logger.warn(`Warning: NODE_ENV is set to ${process.env.NODE_ENV}`);
const PORT = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  app.enableCors();

  if (process.env.ENABLE_SWAGGER == 'true') {
    logger.info('Enabling Swagger');
    const config = new DocumentBuilder()
      .setTitle(`API Docs | ${APP_CONFIG.NAME} | ${APP_CONFIG.CURRENT_VERSION}`)
      .setVersion(APP_CONFIG.CURRENT_VERSION)
      .build();

    const document = SwaggerModule.createDocument(app, config);

    const swaggerPath = process.env.SWAGGER_PATH ?? '/docs';

    app.use(
      swaggerPath,
      apiReference({
        theme: 'deepPurple',
        content: document,
      }),
    );
    logger.info(`API Docs available at http://localhost:3000${swaggerPath}`);
  } else {
    logger.log('Skipping swagger docs initialization!');
  }
  await app.listen(PORT);
  logger.info(`Application is running on: ${await app.getUrl()}`);
  logger.info(
    `Auth Docs are running on: ${await app.getUrl()}/api/auth/reference`,
  );
}
bootstrap();
