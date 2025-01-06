import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    prn: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    class: { type: String, required: true },
  });

export default mongoose.models.MyData || mongoose.model('MyData', studentSchema);
