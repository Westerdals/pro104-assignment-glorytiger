var taskIdCount = getListLength('taskList');
var memberIdCount = getListLength('memberList');

function getListLength(list) {
    if (localStorage.hasOwnProperty(list)) {
        return Object.keys(JSON.parse(localStorage.getItem(list))).length;
    } else {
        return 0;
    }
}