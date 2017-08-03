import React, {Component} from 'react';
import style from '../../css/style.css';
class mainPage extends Component {
    componentWillMount() {
        this.props.getAllUsers();
    }

    addUser() {
        const userName = this.refs.userName.value;
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        const sex = this.refs.sex.value;
        const phonenumber = this.refs.phonenumber.value;
        const email = this.refs.email.value;
        const remark = this.refs.remark.value;
        this.props.addUsers({"userName":userName,"name":name,"age":age,"sex":sex,"phonenumber":phonenumber,"email":email,"remark":remark})
    }

    delete(phonenumber) {
        this.props.deleteUser({"phonenumber": phonenumber});
    }

    modify(val) {
        this.refs.mdUserName.value = val.userName;
        this.refs.mdName.value = val.name;
        this.refs.mdAge.value = val.age;
        this.refs.mdSex.value = val.sex;
        this.refs.mdPhonenumber.value = val.phonenumber;
        this.refs.mdEmail.value = val.email;
        this.refs.mdRemark.value = val.remark;

        $('#modifyModal').modal('show');
    }

    modifyInfo(){
            const newUserName = this.refs.mdUserName.value;
            const newName = this.refs.mdName.value;
            const newAge = this.refs.mdAge.value;
            const newSex = this.refs.mdSex.value;
            const newPhonenumber = this.refs.mdPhonenumber.value;
            const newEmail = this.refs.mdEmail.value;
            const newRemark = this.refs.mdRemark.value;
            if (newUserName && newName && newAge && newSex && newPhonenumber && newEmail && newRemark) {
                this.props.modifyUser({"newUserName":newUserName, "newName":newName, "newAge":newAge, "newSex":newSex,"newPhonenumber":newPhonenumber,"newEmail":newEmail, "newRemark":newRemark})
            }
    }

    searchUser() {
        const phonenumber = this.refs.search.value;
        if(phonenumber) {
            this.props.searchUser({"phonenumber": phonenumber});
        }
        else {
            this.props.getAllUsers();
        }
    }

    render() {
        const userInfo = this.props.ShowAllUsers.map((val, index)=> {
            return <tr key={index}>
                <td>{val.userName}</td>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.sex}</td>
                <td>{val.phonenumber}</td>
                <td>{val.email}</td>
                <td>{val.remark}</td>
                <td><button className="btn btn-primary" onClick={this.modify.bind(this,val)}>修改</button> <button className="btn btn-danger" onClick={this.delete.bind(this,val.phonenumber)}>删除</button></td>
            </tr>
        });

        return <div>
            <div>
                <div className={style.opration}>
                    <input ref='search' type="text" placeholder="输入用户电话查询"/> <button className="btn btn-primary"
                onClick={this.searchUser.bind(this)}>查询</button> <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        添加
                    </button>
                </div>
                <div className="modal fade bs-example-modal-lg" id="myModal" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel">添加一个用户</h4>
                            </div>
                            <div className="input-group">
                                <input type="text" ref="userName" className="form-control" placeholder="用户名"/>
                                <input type="text" ref="name" className="form-control" placeholder="姓名"/>
                                <input type="number" ref="age" className="form-control" placeholder="年龄"/>
                                <input type="text" ref="sex" className="form-control" placeholder="性别"/>
                                <input type="text" ref="phonenumber" className="form-control" placeholder="移动电话"/>
                                <input type="text" ref="email" className="form-control" placeholder="电子邮件"/>
                                <input type="text" ref="remark" className="form-control" placeholder="备注"/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.addUser.bind(this)}>
                                    提交
                                </button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade bs-example-modal-lg" id="modifyModal" ref="modifyModal" role="dialog"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">修改用户信息</h4>
                        </div>
                        <div className="input-group">
                            <input type="text" ref="mdUserName" className="form-control"/>
                            <input type="text" ref="mdName" className="form-control"/>
                            <input type="number" ref="mdAge" className="form-control"/>
                            <input type="text" ref="mdSex" className="form-control"/>
                            <input type="text" ref="mdPhonenumber" className="form-control"/>
                            <input type="text" ref="mdEmail" className="form-control"/>
                            <input type="text" ref="mdRemark" className="form-control"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary"
                                   onClick={this.modifyInfo.bind(this)} >
                                提交
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="show">
              <table>
                  <tr>
                    <td>用户名</td>
                    <td>姓名</td>
                    <td>年龄</td>
                    <td>性别</td>
                    <td>移动电话</td>
                    <td>电子邮件</td>
                    <td>备注</td>
                    <td>操作</td>
                 </tr>
                    {userInfo}
                 </table>
            </div>
        </div>
    }
}

export default mainPage;
