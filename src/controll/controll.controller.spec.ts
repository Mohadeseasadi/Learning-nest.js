import { Test, TestingModule } from '@nestjs/testing';
import { ControllController } from './controll.controller';

describe('ControllController', () => {
  let controller: ControllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllController],
    }).compile();

    controller = module.get<ControllController>(ControllController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
