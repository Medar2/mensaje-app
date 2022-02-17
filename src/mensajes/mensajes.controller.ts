import { Body, Controller, Delete, Get, Post, Put, Res } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {

    constructor(private mensajeService: MensajesService) { }

    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto,@Res() response) {
        this.mensajeService.createMensaje(createMensajeDto).then(mensaje => {
            response.status(201).json(mensaje);
        }).catch(() => {
            response.status(400).json({error: 'Error al crear el mensaje'});
        });
    }

    @Get()
    gerAll(@Res() response) {
        this.mensajeService.getAll().then(mensajes => {
            response.status(201).json(mensajes);
        }).catch(() => {
            response.status(400).json({error: 'Error al buscar el mensaje'});
        });
    }
    
    @Put(':id')
    update(@Body() createMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idMensaje: number) {
        this.mensajeService.updateMensaje(idMensaje,createMensajeDto).then(mensaje => {
            response.status(201).json(mensaje);
        }).catch(() => {
            response.status(400).json({error: 'Error al actualizar el mensaje'});
        });
    }
     

    @Delete(':id')
    delete( @Res() response, @Param('id') idMensaje) {
        this.mensajeService.deleteMensaje(idMensaje).then(mensaje => {
            response.status(201).json(mensaje);
        }).catch(() => {
            response.status(400).json({error: 'Error al eliminar el mensaje'});
        });
    }
}
