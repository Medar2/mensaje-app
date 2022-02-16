import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Controller('mensajes')
export class MensajesController {

    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto) {
        return 'This action adds a new mensaje';
    }

    @Get()
    gerAll() {
        return 'This action returns all mensajes';
    }
    
    @Put(':id')
    update(@Body() createMensajeDto: CreateMensajeDto) {
        return 'This action updates a mensaje';
    }

    @Delete(':id')
    delete() {
        return 'This action removes a mensaje';
    }


}
