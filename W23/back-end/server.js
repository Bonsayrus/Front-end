import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db_uri = process.env.MONGO_URI;
mongoose.connect(db_uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Could not connect to MongoDB:', err));

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema);

app.get('/api/todos', async (req, res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
     } catch (err) {
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
});

app.put('/api/todos/:id', async (req, res) => {
    try{
        const updateTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: 'after' }
        );
        res.json(updateTodo);
     } catch (err) {
        res.status(500).json({ error: 'Failed to update todo' });
     }
});

app.delete('/api/todos/:id', async (req, res) => {
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted' });
     } catch (err) {
        res.status(500).json({ error: 'Failed to delete todo' });
     }
});

app.post('/api/todos', async (req, res) => {
     try{
        const taskTitle = req.body.title;
        const newTodo = new Todo({ title: taskTitle });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
     } catch (err) {
        res.status(500).json({ error: 'Failed to create todo' });
     }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api/test`);
});