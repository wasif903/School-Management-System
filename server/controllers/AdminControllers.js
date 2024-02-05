import AdminModel from "../models/AdminModel.js"

const HandleAdminSignup = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const isAdminExists = await AdminModel.findOne({ email: email });
        if (isAdminExists) {
            return res.status(401).json({ message: "UnAuthorized Signup Request" })
        }
        const createAdmin = new AdminModel({
            username,
            email,
            password
        })
        const savedAdmin = await createAdmin.save();
        const cookie = {
            _id: savedAdmin._id.toString(),
            username: savedAdmin.username,
            email: savedAdmin.email
        }
        res.status(201).json({ message: "Admin Has Been Created Successfully", cookie });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error ' })
    }
}

const HandleAdminLogin = async (req, res) => {
    try {
        const {
            username, email, password
        } = req.body
        const isAdminExists = await AdminModel.findOne({ $or: [{ email: email }, { username }] });
        if (!isAdminExists) {
            return res.status(404).json({ message: "Invalid Credentials" })
        } else {
            if (password !== isAdminExists.password) {
                return res.status(404).json({ message: "Invalid Credentials" })
            } else {
                const cookie = {
                    _id: isAdminExists._id.toString(),
                    username: isAdminExists.username,
                    email: isAdminExists.email
                }
                res.status(200).json({ message: 'Admin Logged In Successfully', cookie })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}


export {
    HandleAdminSignup, 
    HandleAdminLogin
}