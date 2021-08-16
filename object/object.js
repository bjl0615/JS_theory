var memberArray = ['egoing','graphittie','leezhce'];
console.log("memberArray[1]", memberArray[1]);

var memberObject = {
    manager : 'eoging',
    devleoper : 'graphiite',
    desingner : 'leezhce'
}

memberObject.desingner = 'leezche';
console.log("memberObject.desingner", memberObject.desingner);
console.log("memberObject['desingner']", memberObject['desingner']);
delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager)