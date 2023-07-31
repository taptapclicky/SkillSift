const { Schema, model } = require('mongoose');

const skillsSchema = new Schema({
    skillId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    skill: {
        type: String,
        required: true,
        unique: true,
    },
});

const Skills = model('Skills', skillsSchema);

module.exports = Skills;