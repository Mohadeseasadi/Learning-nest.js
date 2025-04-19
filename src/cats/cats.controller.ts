import { Controller, Get, HttpCode, Post, Req, Header, Redirect, Query, Param, HostParam, Body } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './cats.dto';

// Define the main controller for routes starting with /cats
@Controller('cats')
export class CatsController {

    // Simple GET route returning a string
    @Get()
    findAll(): string {
        return "this action returns all cats"
    }

    // Accessing the request object using @Req() decorator
    @Get('req')
    findAllRequest(@Req() request: Request): string {
        return "i testing resquest"
    }

    // Wildcard routing example (e.g. /cats/abcd/something)
    @Get('abcd/*')
    findAllAsterisk() {
        return 'This route uses a wildcard';
    }

    // Redirecting user to NestJS documentation
    @Get('nest-docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' }
        }
    }

    // POST route with custom HTTP code and header
    @Post()
    @HttpCode(200)
    @Header('Cache-Control', 'no-store')
    create(): string {
        return "this action adds a new cat"
    }

    // Reading all route parameters as an object
    @Get('/parameters/:id')
    findOne(@Param() params: any): string {
        console.log(params.id, '----. id is here')
        return `this actions return a ${params.id}`
    }

    // Reading a specific route parameter
    @Get('/id-finded/:id')
    findOneParam(@Param('id') id: string): string {
        console.log(id, '----> id is here')
        return `this actions return a ${id}`
    }

    // Asynchronous route returning an array using Promise
    @Get('array')
    async findArray(): Promise<any[]> {
        return ['hey', 'hhgjkg']
    }

    // Returning an observable using RxJS `of`
    @Get('find-array')
    findAllArray(): Observable<any[]> {
        return of(['fdsdls', 'sdflkhasd']);
    }

    // Using @Body() decorator to handle incoming POST data with DTO
    @Post('added-cats')
    async createCat(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new meow cat';
    }

    // Handling query parameters in a GET request
    @Get('query-selected')
    queryselected(
        @Query('age') age: number,
        @Query('breed') breed: string
    ): string {
        return `this action return all cats filtered by age ${age} and breed ${breed}`;
    }
}


// Host-based routing: Controller responds only when host matches `admin.example.com/`
@Controller({ host: 'admin.example.com/' })
export class AdminController {
    @Get()
    index(): string {
        return 'Admin page';
    }
}

// Dynamic subdomain routing example using @HostParam
@Controller({ host: ':admin.exampple.com' }) // Note: check typo "exampple"
export class AdminControllerr {
    @Get()
    getInfo(@HostParam('account') account: string) {
        return account;
    }
}
