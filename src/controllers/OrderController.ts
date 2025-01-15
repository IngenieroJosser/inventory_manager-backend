import { Request, Response } from 'express';
import * as OrderService from '../services/OrderService';

export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await OrderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ error: errorMessage });
    }
};

export const getOrders = async (_req: Request, res: Response): Promise<void> => {
    try {
        const orders = await OrderService.getOrders();
        res.json(orders);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};

export const getOrderById = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await OrderService.getOrderById(req.params.id);
        if (!order) {
            res.status(404).json({ error: 'Order not found' });
            return;
        }
        res.json(order);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};

export const updateOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await OrderService.updateOrder(req.params.id, req.body);
        if (!order) {
            res.status(404).json({ error: 'Order not found' });
            return;
        }
        res.json(order);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ error: errorMessage });
    }
};

export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await OrderService.deleteOrder(req.params.id);
        if (!order) {
            res.status(404).json({ error: 'Order not found' });
            return;
        }
        res.status(204).send();
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
