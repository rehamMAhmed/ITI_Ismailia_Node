const mongoose =require('mongoose');

const schema=mongoose.Schema;

const userSchema = new schema({
    username:{
        type: String ,
        lowercase:true
    },
    age:Number
});

userSchema.statics.findByUsername = async function (username) {
    
    const User = this;
    let user = await User.findOne({username});
    debugger;

    
}
const User = mongoose.model('User',userSchema);

module.exports = User;