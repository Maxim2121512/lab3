const fs = require('fs')

module.exports = class JsonManipulator {

    constructor(filePath) {
        this.filePath = filePath;
        this.data = this.readData();
    }

    readData() {
        try {
            const jsonData = fs.readFileSync(this.filePath, 'utf-8');
            const parsedData = JSON.parse(jsonData);
            return parsedData;
        } catch (e) {
            console.error("Can't read JSON file: ", e);
        }
    }

    writeData(data) {
        try {
            const jsonData = JSON.stringify(data, null, 2);
            fs.writeFileSync(this.filePath, jsonData, 'utf-8');
        } catch (e) {
            console.log("Can't write to JSON file: ", e);
        }
    }

    editElement(newElem) {
        const id = this.data.findIndex(elem => elem.id === newElem.id);

        if (id !== -1) {
            this.data[id] = {...this.data[id], ...newElem};
            this.writeData(this.data);
        } else {
            console.error(`Elem with id ${id} not found`);
        }
    }

    getElementById(id, key) {
        const elem = this.data.find(elem => elem.id === id);
        return elem ? elem[key] : [];
    }

    getObjectsById(id) {
        return this.data.filter(obj => id.includes(obj.id));
    }

    getObjectById(id) {
        return this.data.find(obj => obj.id === id);
    }

}
