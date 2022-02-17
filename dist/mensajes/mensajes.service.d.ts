import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { Mensaje } from './entities/mensaje.entity';
export declare class MensajesService {
    private readonly mensajeRepository;
    constructor(mensajeRepository: Repository<Mensaje>);
    getAll(): Promise<Mensaje[]>;
    createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>;
    updateMensaje(id: number, actualizarMensaje: CreateMensajeDto): Promise<Mensaje>;
    deleteMensaje(id: number): Promise<any>;
    getById(id: number): Promise<Mensaje>;
}
