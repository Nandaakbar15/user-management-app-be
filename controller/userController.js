const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

exports.getAllUsers = async(req, res) => {
    try {
        const users = await prisma.user.findMany();

        res.status(200).json({
            statusCode: 200,
            data: users
        });
    } catch(error) {
        console.error("Error : ", error);

        res.status(404).json({
            statusCode: 404,
            message: 'Error! Could not fetch the data!'
        })
    }
}

exports.addNewUsers = async(req, res) => {
    try {
        const {nama, email, nomorTelepon, statusAktif, departemen} = req.body;

        // Mengonversi string "true" atau "false" menjadi nilai boolean
        const isStatusAktifBoolean = statusAktif === "true";

        const AddData = {
            nama,
            email,
            nomorTelepon,
            statusAktif: isStatusAktifBoolean,
            departemen
        }

        await prisma.user.create({
            data: AddData
        });

        res.status(200).json({
            statusCode: 200,
            message: 'Successfully add new data!'
        });
    } catch(error) {
        console.error("Error : ", error);

        res.status(404).json({
            statusCode: 404,
            message: 'Error! Could not add new user!'
        });
    }
}

exports.getUserById = async(req, res) => {
    try {
        const parsedIdUser = parseInt(req.params.id);
        const user = await prisma.user.findUnique({
            where: {id: parsedIdUser}
        });

        if(!user) {
            res.status(401).json({
                statusCode: 401,
                message: `User with that ${parsedIdUser} is not found!`
            });
        }

        res.status(200).json({
            statusCode: 200,
            data: user
        });
    } catch(error) {
        console.error("Error : ", error);

        res.status(404).json({
            statusCode: 404,
            message: "Error! Could not fetch the data!"
        })
    }
}

exports.updateUser = async(req, res) => {
    try {
        const parseId = parseInt(req.params.id);
        const {nama, email, nomorTelepon, statusAktif, departemen} = req.body;
        
        const updateData = {
            nama,
            email,
            nomorTelepon,
            statusAktif,
            departemen
        }

        await prisma.user.update({
            where: {id: parseId},
            data: updateData
        });

        res.status(200).json({
            statusCode: 200,
            message: 'Successfully update user!'
        });

    } catch(error) {
        console.error("Error : ", error);

        res.status(404).json({
            statusCode: 404,
            message: 'Error! Could not update the data!'
        });
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const parseIdUser = parseInt(req.params.id);

        if(!parseIdUser) {
            console.error("Error, user with that data is not found!");

            res.status(401).json({
                statusCode: 401,
                message: `User with that ${parseIdUser} is not found!`
            });
        }

        await prisma.user.delete({
            where: {id: parseIdUser}
        });

        res.status(200).json({
            statsuCode: 200,
            message: 'Successfully delete user!'
        });
    } catch(error) {
        console.error("Error : ", error);

        res.status(404).json({
            statusCode: 404,
            message: 'Error! Could not delete data!'
        });
    }
}