import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { PrismaService } from 'src/adapters/applications/apis/prisma.service';
import { PrismaHealthIndicator } from './PrismaHealthIndicator.service';
import { HealthController } from './health.controller';

@Module({
  imports: [
    TerminusModule,
    TerminusModule.forRoot({
      errorLogStyle: 'pretty',
    }),
  ],
  providers: [PrismaHealthIndicator, PrismaService],
  controllers: [HealthController],
})
export class HealthModule {}
