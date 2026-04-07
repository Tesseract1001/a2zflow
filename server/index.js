import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO_URI = 'mongodb+srv://tech_db_user:Tesseract1001@cluster0.r3x2v20.mongodb.net/a2zAgents?appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB — a2zAgents'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name:         { type: String, required: true },
  email:        { type: String, required: true },
  phone:        { type: String, default: '' },
  company:      { type: String, default: '' },
  industry:     { type: String, default: '' },
  message:      { type: String, default: '' },
  type:         { type: String, enum: ['contact', 'demo'], default: 'contact' },
  source:       { type: String, default: 'website' },
  createdAt:    { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// POST /api/contact — Save contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, industry, message, type } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }

    const contact = new Contact({
      name, email, phone, company, industry, message,
      type: type || 'contact',
      source: 'website',
    });

    await contact.save();
    console.log(`📩 New ${type || 'contact'} from ${name} <${email}>`);

    res.json({ success: true, message: 'Thank you! We\'ll get back to you within 24 hours.' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  }
});

// GET /api/contacts — List all contacts (admin use)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

app.listen(PORT, () => {
  console.log(`🚀 A2Z Flow API running on http://localhost:${PORT}`);
});
