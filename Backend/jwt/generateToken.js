import jwt from "jsonwebtoken";

const createTokenAndSaveCoockie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
        expiresIn: "5d",
    });
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });

};

export default createTokenAndSaveCoockie;