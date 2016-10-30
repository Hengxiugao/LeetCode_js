/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var end = 1;
        while (!isBadVersion(end)){
            end *= 2;
        }
        var start = end / 2;
        while (start + 1 < end){
            var mid = start + (end - start) / 2;
            if (!isBadVersion(mid)){
                start = mid;
            } else {
                end = mid;
            }
        }
        if (isBadVersion(start)){
            return start;
        } else {
            return end;
        }
    };
};