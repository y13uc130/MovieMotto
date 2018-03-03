var mongoose= require('mongoose');

//creating the schema
var courseSchema= mongoose.Schema({
    title: {type: String, required: '{PATH} is required'},
    featured: {type: Boolean, required: '{PATH} is required'},
    published: {type: Date, required: '{PATH} is required'},
    tags: [String]
});

//creating a model based on this schema
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses(){
    Course.find({}).exec(function(err, collection){
        if(collection.length === 0){
        Course.create({title: 'Screenplay writing by Tarun Bhasker', featured: true, published: new Date('10/5/2017'), tags:['Writings']});
        Course.create({title: 'Cinematography for newbies', featured: true, published: new Date('10/12/2017'), tags:['Cinematography']});
        Course.create({title: 'Super Duper Action Sequences by Peter Heins', featured: false, published: new Date('10/1/2017'), tags:['Action']});
        Course.create({title: 'Visual Wonders through VFX', featured: false, published: new Date('7/12/2017'), tags:['VFX']});
        Course.create({title: 'Cachy music for Off-Beat Films', featured: true, published: new Date('1/1/2017'), tags:['Music']});
        Course.create({title: 'Controlling the Direction Unit', featured: true, published: new Date('10/17/2017'), tags:['Direction']});
        Course.create({title: 'Maintaining Schedules', featured: true, published: new Date('3/1/2017'), tags:['Management']});
        Course.create({title: 'A Survival Guide for Pre-climax writings', featured: true, published: new Date('2/1/2017'), tags:['Writings']});
        Course.create({title: 'How to Hunt for stars with Wacky content', featured: true, published: new Date('10/7/2017'), tags:['Management']});
        Course.create({title: 'write a Rom-Com once in a while', featured: false, published: new Date('8/1/2017'), tags:['Writings']});
        Course.create({title: 'Telling Co-writers to Leave You Alone', featured: false, published: new Date('11/1/2017'), tags:['Writings']});
        Course.create({title: "Camera with artistic eyes can invent new space", featured: true, published: new Date('10/13/2017'), tags:['Cinematography']});
        Course.create({title: 'Why movie reviews can effect', featured: false, published: new Date('10/1/2017'), tags:['Reviews']});
        Course.create({title: 'Learn Direction in 30 days by SSR', featured: true, published: new Date('2/15/2017'), tags:['Direction']});
        Course.create({title: 'Death can also be a reason', featured: true, published: new Date('7/1/2017'), tags:['screenplay','Direction']});
        }
    })
}
//export the function
exports.createDefaultCourses= createDefaultCourses;