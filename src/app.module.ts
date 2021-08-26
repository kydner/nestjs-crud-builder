import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './models/auth/auth.module';
import { UserModule } from './models/user/user.module';
// import ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.1.232',
      port: 3306,
      username: 'programmer',
      password: 'programmer',
      database: 'programmer_test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      // We are using migrations, synchronize should be set to false.
      synchronize: true,
      // Run migrations automatically,
      // you can disable this if you prefer running migration manually.
      migrationsRun: true,
      logging: true,
      logger: 'file',

      // allow both start:prod and start:dev to use migrations
      // __dirname is either dist or src folder, meaning either
      // the compiled js in prod or the ts in dev
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/database/migrations',
      },
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
