import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { Mensaje } from './entities/mensaje.entity';

@Injectable()
export class MensajesService {

    constructor(
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>
    ) {}

    async getAll() : Promise<Mensaje[]> {
        return await this.mensajeRepository.find();
    }

    async createMensaje(mensajeNuevo : CreateMensajeDto): Promise<Mensaje> {
        const nuevo = new Mensaje();
        nuevo.mensaje = mensajeNuevo.mensaje;
        nuevo.nick = mensajeNuevo.nick;

        return await this.mensajeRepository.save(nuevo);
    }

    async updateMensaje(id: number, actualizarMensaje: CreateMensajeDto) : Promise<Mensaje> {
        const mensaje = await this.mensajeRepository.findOne(id);
        mensaje.mensaje = actualizarMensaje.mensaje;
        mensaje.nick = actualizarMensaje.nick;

        return await this.mensajeRepository.save(mensaje);
    }

    async deleteMensaje(id: number): Promise<any>{
        return await this.mensajeRepository.delete(id);        
    }


    async getById(id: number) {
        return await this.mensajeRepository.findOne(id);
    }
}
