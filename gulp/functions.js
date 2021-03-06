const _         = require('./plugin');
const dir       = require('./dir');

module.exports = {
    getConfig: (ymlFile, path = dir.config.dir) => { //yamlファイル取得
        const file = _.fs.readFileSync(`${path}${ymlFile}`, 'utf8');
        return _.yaml.parse(file);
    },
    getContents: (slide, path = dir.contents.dir) => { //スライドファイル取得
        const file = _.fs.readFileSync(`${path}/${slide}`, 'utf8');
        if(file.indexOf("\r\n") !== -1) {
            return true;
        }
        return false;
    },
    formatString: (str) => {
        if(typeof str !== 'string') {
            if(typeof str === undefined || typeof str === null || JSON.stringify(str) === 'undefined' || JSON.stringify(str) === 'null') {
                return '';
            }
            return String(str);
        }
        return str;
    }
};
