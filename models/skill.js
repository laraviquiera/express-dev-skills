const skills = [
    {id: 127304, skill: 'HTML', done: true},
    {id: 127305, skill: 'CSS', done: true},
    {id: 127306, skill: 'JavaScript', done: true},
    {id: 127307, skill: 'Node', done: true},
    {id: 127308, skill: 'Django', done: false}
];

module.exports = {
 getAll,
 getOne,
 create,
 deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function getAll() {
    return skills;
};