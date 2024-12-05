// Example scene object
const scene = {
    id: 1,
    name: 'Example Scene',
    objects: [
        { id: 101, type: 'object', position: { x: 10, y: 20 } },
        { id: 102, type: 'object', position: { x: 30, y: 40 } }
    ]
};

// Convert the scene object to a JSON string with indentation
const jsonString = JSON.stringify(scene, null, 2);
console.log(jsonString);
