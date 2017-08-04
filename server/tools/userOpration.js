let userHandle = {
    insert: 'INSERT INTO userInfo(userName,name,age,sex,phonenumber,email,remark) values(?,?,?,?,?,?,?)',
    queryAll: 'SELECT * FROM userInfo',
    update: 'UPDATE userInfo SET useName=?, name=?, age=?, sex=?, phonenumber=?,email=?, remark=? WHERE phonenumber=?',
    delete: 'DELETE FROM userInfo WHERE id = ?',
    queryByPhonenumber: 'SELECT * FROM userInfo WHERE phonenumber=?',
};

module.exports = userHandle;