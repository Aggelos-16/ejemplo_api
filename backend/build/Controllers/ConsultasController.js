"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultasController = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const config = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'ejemplo',
    port: 3306
};
class ConsultasController {
    index(req, res) {
        res.json({ "Controlador": 'Funciona la API' });
    }
    holamundo(req, res) {
        res.json({ "Controlador": 'Hola Mundo' });
    }
    getuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conexion = yield promise_1.default.createConnection(config);
                const consulta = `select * from usuarios;`;
                const result = yield conexion.query(consulta);
                const respuesta = result[0];
                yield conexion.end();
                return res.status(200).json({ respuesta });
            }
            catch (error) {
                return res.status(500).json({ "error": 'ya no sale' });
            }
        });
    }
}
exports.consultasController = new ConsultasController();
