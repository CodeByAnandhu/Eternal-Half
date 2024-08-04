
import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({

  questionText: {
    type: String,
    required: true
  },
  importance: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'medium'
  }
});

export default mongoose.models.Question || mongoose.model('Question', questionSchema);
