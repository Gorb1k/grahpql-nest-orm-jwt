import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import {join} from 'path'
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CatsModule } from './cats/cats.module';
import { OwnerModule } from './owner/owner.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            autoSchemaFile: join(process.cwd(),
                'src/schema.gql'),
            sortSchema:true,
            driver: ApolloDriver
        }),
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'memory',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true
        }),
        CatsModule,
        OwnerModule,
        UsersModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
