import { error } from 'console';
import mongoose from 'mongoose'
import { buffer } from 'stream/consumers';

// If we have already a mongo connection then mongoose, otherwise empty object
// global as any avoid VS error for cached.conn TS tips

const MONGODB_URI = process.env.MONGODB_URI;
let cached = (global as any).mongoose || {conn:null,promise:null};

export const connectToDataBase = async() =>{
    if(cached.conn) return cached.connect;

    if(!MONGODB_URI) throw new Error('MONGO_DB us missing');

    // We connect to already cached connection or create a new
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
        dbName: 'whatsup',
        bufferCommands: false,
    })
    
    // Each invocation to database might result in a new connection of a database which is inneficiant
    // 
    cached.conn = await cached.promise;

    return cached.conn
}

// 