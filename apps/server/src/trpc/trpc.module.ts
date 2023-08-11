import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';

@Module({
  providers: [TrpcService],
})
export class TrpcModule {}
