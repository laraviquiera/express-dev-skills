const skills = [
    {id: 127304, skill: 'HTML', done: true},
    {id: 127305, skill: 'CSS', done: true},
    {id: 127306, skill: 'JavaScript', done: true},
    {id: 127307, skill: 'Node', done: true},
    {id: 127308, skill: 'Django', done: false}
];

module.exports = {
 getAll,
 getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function getAll() {
    return skills;
};