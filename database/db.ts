import mongoose from 'mongoose';

/*
    *0 = disconected
    *1 = conected
    *2 = conecting
    *3= disconecting
*/
const mongoConection = {
    isConnected: 0
}
export const connect = async () => {
    if (mongoConection.isConnected) {
        console.log('Ya ESTABAMOS conectados');
        return;
    }
    if (mongoose.connections.length > 0) {
        mongoConection.isConnected = mongoose.connections[0].readyState;
        if (mongoConection.isConnected === 1) {
            console.log('Usando conexion anterior')
        }
        await mongoose.disconnect();
    }
    await mongoose.connect(process.env.MONGO_URL || '')
    mongoConection.isConnected = 1;
    console.log('conectado a mongo-db:', process.env.MONGO_URL)
}
export const disconnect = async () => {
    if (process.env.NODE_ENV === 'development') return;
    if (mongoConection.isConnected === 0) return
    await mongoose.disconnect()
    mongoConection.isConnected = 0
    console.log('Desconectado de mongo-db')
}