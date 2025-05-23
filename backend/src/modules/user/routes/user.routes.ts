// Importa el enrutador de Express para definir las rutas.
import { Router } from "express";

// Importa el controlador de usuarios para asociarlo con las rutas.
import { UserController } from "../controllers/user.controller";

// Importa el middleware que valida el ID de la ruta.
import { VerifyIdMiddleware } from "../../../core/middlewares/verifyId.middleware"; 

export class UserRoutes {
    // Propiedad pública que representa el enrutador de Express.
    public readonly router: Router;

    // Propiedad privada que mantiene la instancia del controlador de usuarios.
    private readonly controller: UserController;

    constructor() {
        // Inicializa el enrutador de Express.
        this.router = Router();
        
        // Inicializa el controlador de usuarios.
        this.controller = new UserController();

        // Llama al método que configura las rutas.
        this.initializeRoutes();
    }

    // Método para definir todas las rutas del controlador de usuarios.
    public initializeRoutes(): void {
        // Desestructuración para obtener los métodos del controlador.
        const { getAll, getById, createNew, updateById, deleteById } = this.controller;

        // Define la ruta GET para obtener todos los usuarios.
        // Cuando se accede a `/usuarios`, llama a `getAll` del controlador.
        this.router.get("/", getAll.bind(this.controller));

        // Define la ruta GET para obtener un usuario por su ID.
        // Esta ruta valida el ID con el middleware antes de llamar al `getById`.
        this.router.get("/:id", VerifyIdMiddleware.validate, getById.bind(this.controller));

        // Define la ruta POST para crear un nuevo usuario.
        // Cuando se accede a `/usuarios`, llama a `createNew` del controlador.
        this.router.post("/", createNew.bind(this.controller));

        // Define la ruta PATCH para actualizar un usuario por su ID.
        // Esta ruta valida el ID con el middleware antes de llamar a `updateById`.
        this.router.patch("/:id", VerifyIdMiddleware.validate, updateById.bind(this.controller));

        // Define la ruta DELETE para eliminar un usuario por su ID.
        // Esta ruta valida el ID con el middleware antes de llamar a `deleteById`.
        this.router.delete("/:id", VerifyIdMiddleware.validate, deleteById.bind(this.controller));
    }
}
