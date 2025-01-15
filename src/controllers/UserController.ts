import { Request, Response } from 'express';
import * as UserService from '../services/UserService';
import jwt from 'jsonwebtoken';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ error: errorMessage });
    }
};

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserService.getUsers();
        res.json(users);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserService.getUserById(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserService.updateUser(req.params.id, req.body);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ error: errorMessage });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserService.deleteUser(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(204).send();
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};

export const registerUser = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;
  
    try {
      const newUser = await UserService.registerUser(username, password, role);
      res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
};
  
export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    try {
      const token = await UserService.authenticateUser(username, password);
      res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error: any) {
      res.status(401).json({ error: error.message });
    }
};