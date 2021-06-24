import { NextFunction, Request, Response } from "express";

export const ensureAdmin = (request: Request, response: Response, next: NextFunction) => {
    const admin = true;

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}