import React, {Component} from 'react';

export default class Child extends Component {

    state={
        users:[
            {id:'001',name:'tom',age:18},
            {id:'003',name:'jerry',age:19},
            {id:'003',name:'jack',age:21}
        ]

        // users:'abcdefg'

    }

    render() {
        return (
            <div>
                <h2>Child组件</h2>
                {
                    this.state.users.map((userObj)=>{
                        return <h4 key={userObj.id}>name:{userObj.name}----age:{userObj.age}</h4>
                    })

                }
            </div>
        );
    }
}
