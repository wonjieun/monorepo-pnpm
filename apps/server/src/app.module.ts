import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [ConfigModule.forRoot(), TrpcModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
