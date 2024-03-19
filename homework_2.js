const fs = require('fs');
const os = require('os');

// Function to obtain system information and create a text file
function obtainSystemInfo() {
    const userName = os.hostname();
    const cpuInfo = os.cpus()[0].model;
    const freeMem_GB = (os.freemem() / Math.pow(1024, 3)).toFixed(2);
    const ram_GB = (os.totalmem() / Math.pow(1024, 3)).toFixed(2);

    const data = `User Name:${userName}\nCPU:${cpuInfo}\nFree Memory:${freeMem_GB}\nRAM:${ram_GB}`;

    writeTextFile(data);
}

// Function to write the text file
function writeTextFile(data) {
    fs.writeFile('info.txt', data, (err) => {
        if (err) {
            console.error('Error writing the file:', err);
        } else {
            readTextFile();
        }
    });
}

// Function to read the text file
function readTextFile() {
    fs.readFile('info.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
            obtainJSONformat(data);
        }
    });
}

// Function to obtain JSON format
function obtainJSONformat(data) {
    const lines = data.split('\n');
    const JSONdata = {
        userName: lines[0].split(':')[1].trim(),
        cpuInfo: lines[1].split(':')[1].trim(), 
        freeMemory_GB: parseFloat(lines[2].split(':')[1].trim()),
        totalRAM_GB: parseFloat(lines[3].split(':')[1].trim()) 
    };
    const json = JSON.stringify(JSONdata, null, 2);
    console.log(json);
}

obtainSystemInfo();

