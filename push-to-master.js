const { exec } = require("child_process")

function run(cmd, callback) {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return
        }
        console.log(`stdout: ${stdout}`);
        if (callback) callback()
    })
}

const REPO = 'https://github.com/elu-dev/elu-dev.github.io'



run(`git clone --depth=1 --branch=master ${REPO}`, 
    () => {
        try {
            run('python3 minify-src.py')
        } catch (error) {
            // run('python minify-src.py')
        }
    })


