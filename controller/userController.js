import { User } from "../model/user.js";

const userController = {
    createUser: async (req, res) => {
        try {
            const {
                firstname,
                lastname,
                email,
                image,
                role,
                dateOfBirth,
                password,
            } = req.body;

            const user = await User.create({
                firstname,
                lastname,
                email,
                image,
                role,
                dateOfBirth,
                password,
            });

            await user.save();

            return res.status(201).json({
                statusCode: 201,
                message: "User created",
                user: user,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                statusCode: 500,
                message: "Internal server error",
            });
        }
    },

    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const {
                firstname,
                lastname,
                email,
                image,
                role,
                dateOfBirth,
                password,
            } = req.body;

            if (!userId) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "userId is required for updating a user",
                });
            }

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "User not found",
                });
            }

            user.firstname = firstname || user.firstname;
            user.lastname = lastname || user.lastname;
            user.email = email || user.email;
            user.image = image || user.image;
            user.role = role || user.role;
            user.dateOfBirth = dateOfBirth || user.dateOfBirth;
            user.password = password || user.password;

            await user.save();

            return res.status(200).json({
                statusCode: 200,
                message: "User updated",
                user: user,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                statusCode: 500,
                message: "Internal server error",
            });
        }
    },

    fetchUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "User not found",
                });
            }

            return res.status(200).json({
                statusCode: 200,
                message: "User fetched successfully",
                user: user,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                statusCode: 500,
                message: "Internal server error",
            });
        }
    },

    fetchAllUsers: async (req, res) => {
        try {
            const users = await User.find();

            return res.status(200).json({
                statusCode: 200,
                message: "All users fetched successfully",
                users: users,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                statusCode: 500,
                message: "Internal server error",
            });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "User not found",
                });
            }

            await user.remove();

            return res.status(200).json({
                statusCode: 200,
                message: "User deleted successfully",
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                statusCode: 500,
                message: "Internal server error",
            });
        }
    },
};

export default userController;
