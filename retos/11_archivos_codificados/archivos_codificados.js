/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    let from = filename.indexOf('_');
    let to = filename.lastIndexOf('.');

    return filename.slice(from + 1,to)
}

module.exports = decodeFilename