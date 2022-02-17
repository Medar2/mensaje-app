import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
export declare class MensajesController {
    private mensajeService;
    constructor(mensajeService: MensajesService);
    create(createMensajeDto: CreateMensajeDto, response: any): void;
    gerAll(response: any): void;
    update(createMensajeDto: CreateMensajeDto, response: any, idMensaje: any): void;
    delete(response: any, idMensaje: any): void;
}
