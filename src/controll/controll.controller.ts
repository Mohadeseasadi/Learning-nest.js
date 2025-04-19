import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateControllDto, ListAllEntities, UpdateControllDto,} from './controll.dto';
import { Response } from 'express';

// Controller for handling routes under /controll
@Controller('controll')
export class ControllController {

  // Handle POST request to create a new controll
  @Post()
  create(@Body() createControll: CreateControllDto): string {
    return `this action adds a new controll bu name : ${createControll.name}`;
  }

  // Handle GET request to retrieve all controlls with optional query params
  @Get()
  findAll(@Query() query: ListAllEntities): string {
    return `this actions all controll (limit : ${query.limit} items ) `;
  }

  // Handle GET request with id parameter to fetch a specific controll
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return ` this action returns a #${id} controll`;
  }

  // Handle PUT request with id to update a controll using DTO
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateControll: UpdateControllDto,
  ): string {
    return `this action updates a #${id} controll , 
        updateData -> ${updateControll.description}`;
  }

  // Handle DELETE request to remove a specific controll
  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `this action removes a #${id} controll`;
  }

  // -----------------------------------------------------------------------------------
  // Additional examples using @Res() to manage the response manually

  // POST request with manual response using status code CREATED
  @Post('details')
  details(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  // GET request returning an empty JSON array with status code OK
  @Get('details')
  findAllDetail(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  // GET request using passthrough so you can return data and still set response manually
  @Get('different-details')
  findAllDefferentDetails(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return ['different'];
  }
}
