const fs = require('fs');
const ejs = require('ejs');



const runtime = {
    author: 'Neruthes'
};
runtime.runtime = runtime;
runtime.render = async function (component, data) {
    let tmp = await ejs.renderFile(__dirname + `/${component}.ejs`, data);
    console.log(tmp);
    return tmp;
};

let mainTmpl = fs.readFileSync(__dirname + '/main.ejs').toString();
let output = ejs.render(mainTmpl, runtime);
fs.writeFileSync(__dirname + '/output.html', output)