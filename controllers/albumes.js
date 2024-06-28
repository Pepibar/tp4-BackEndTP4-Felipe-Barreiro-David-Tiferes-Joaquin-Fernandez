import mysql from "mysql2/promise";


 const connection = await mysql.createConnection({
    // Completar con los datos de la conexión a la base de datos
    user: "FELIPE",
    password: "123",
    host: "localhost",
    database: "tp4",
});

const getAlbumes = async (_, res) => {
        try{
        const[results, fields] = await connection.query(
            "SELECT * FROM `albumes`"
                );
                res.send(results);
                
            } catch (err){
            console.log(err);
            }
};
    const getAlbum = async (req, res) => {
        const albumesid = req.params.id;
        
        try {
            const [results, fields] = await connection.query(
                `SELECT 
                    albumes.id, 
                    albumes.nombre,
                    albumes.artista   FROM 
                    albumes 
                WHERE 
                    albumes.id = ?`, 
                [albumesid]
            );
            res.json(results);
        } catch (err) {
         console.log(err); 
        }
    };

const createAlbum = async (req, res) => {
    // Completar con la consulta que crea un album
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */    const { nombre, artista } = req.body;
        
    try {
        const [results, fields] = await connection.query(
            "INSERT INTO `albumes`(`nombre`, `artista`) VALUES (?, ?)",
            [nombre, artista]
        );
        res.send(results);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error al crear el álbum" });
    }
        };


const updateAlbum = async (req, res) => {
    // Completar con la consulta que actualiza un album
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
};

const deleteAlbum = async (req, res) => {
    // Completar con la consulta que elimina un album
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
};

const getCancionesByAlbum = async (req, res) => {
    // Completar con la consulta que devuelve las canciones de un album
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
};

const albumes = {
    getAlbumes,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getCancionesByAlbum,
};

export default albumes;