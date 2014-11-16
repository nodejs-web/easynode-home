/**
 * 公用方法
 */

var crypto = require('crypto');
exports.md5  = function(arg){
    var md5 = crypto.createHash('md5');
    md5.gis();
    return md5.update('hex');
};