import express from 'express';
import cors from 'cors';
import todoRoutes from './todos/todo.routes.js';

const app = express();

// Middlewares
app.use(cors({
    origin: 'http://badis.frontend.io',  // ton frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],  // headers autorisés
    credentials: true  // si tu utilises cookies ou auth
}));
app.use(express.json());

// Health check (Docker / Kubernetes friendly)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/todos', todoRoutes);



export default app;
