import {allowedOrigins} from "./allowed_origins.js";

export const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, origin);
        } else {
            callback("Error de CORS origin: " + origin + " No autorizado!");
        }
    }, 
    credentials: true,
};



