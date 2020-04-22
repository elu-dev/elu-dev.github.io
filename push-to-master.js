const { exec } = require("child_process")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function run(cmd, callback) {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return
        }
        if (stderr) console.log(`stderr: ${stderr}`)

        console.log(`stdout: ${stdout}`);
        if (callback) callback()
    })
}

const REPO = 'https://github.com/elu-dev/elu-dev.github.io'
const REPO_NAME = 'elu-dev.github.io'



run(`git clone --depth=1 --branch=master ${REPO}`, 
    () => run('python3 minify-src.py',
        () => run(`cd ${REPO_NAME}`,
            () => rl.question('Commit msg',
                msg => run(`git commit -am "${msg}"`,
                    () => run('git push',
                        () => run(`rm -Rf ${REPO_NAME}`)
                    )
                )
            )
        )
    )
)


