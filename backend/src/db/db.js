// // function connectDB(){
// //     const mongoose = require("mongoose");

// // mongoose.connect("mongodb+srv://ayushtandon014_db_user:9NKh9MrEXpL0vFbq@cluster0.pgrxhgq.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0")
// // .then(() => console.log("MongoDB Atlas connected"))
// // .catch(err => console.error("MongoDB connection error:", err));

// // }
// // module.exports = connectDB;

// // function connectDB(){
// //     const mongoose = require("mongoose")
// //     mongoose.connect("mongodb+srv://ayushtandon014_db_user:9NKh9MrEXpL0vFbq@cluster0.pgrxhgq.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// // .then(() => console.log("MongoDB Atlas connected"))
// // .catch((err) => console.error("MongoDB connection error:", err));
// // }
// // module.export = connectDB;


// const mongoose = require("mongoose");

// async function connectDB() {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("✅ MongoDB Atlas connected");
//     } catch (err) {
//         console.error("❌ MongoDB connection error:", err);
//         process.exit(1);
//     }
// }

// module.exports = connectDB;


const mongoose = require('mongoose');
function connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err);
        })
}

module.exports = connectDB;