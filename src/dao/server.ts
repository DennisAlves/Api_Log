import mongoose from 'mongoose';

export class Server {
    private static user = "logBd";
    private static userPassword = "Zr714uErB4lKbiZV";
    private static cluster = "cluster0.4xmul";
    private static url = `mongodb+srv://${Server.user}:${Server.userPassword}@${Server.cluster}.mongodb.net/logBd`;
    public async connect(){
        try {
            await mongoose.connect(Server.url,{
                useCreateIndex:true,
                useNewUrlParser:true,
                useUnifiedTopology:true,
                useFindAndModify: false
            }, ()=>{console.log('Connected to database')})
        }catch(e) {console.log(e)}
    }

    public async disconnect(){
        await mongoose.connection.close(()=>{console.log('disconnect from database')})
    }

}
