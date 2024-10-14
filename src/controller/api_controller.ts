import { Request, Response } from "express";

export default {
    self: (req: Request, res: Response) => {
        try {
            res.sendStatus(200); // Send a 200 OK status
        } catch (err) {
            console.error(err); // Log the error for debugging
            res.sendStatus(500); // Send a 500 Internal Server Error status
        }
    }
};
