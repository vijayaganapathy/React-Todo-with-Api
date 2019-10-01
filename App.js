import React from 'react';
import Nav1 from "./Nav";
import Button1 from "./Button";
import List1 from"./List";
import axios from "axios"
class appfunction extends React.Component{
    state ={ 
        list:[]
    };
    componentDidMount(){
        axios.get("http://localhost:8080/todos").then(result=>{
            console.log(result)
            this.setState({
                list:result.data
            })
        }).catch(err=>console.log(err))
    }
    additem=(itemonebyone)=>{
        if(itemonebyone===""){
            alert("Enter your todo task")
        }
        else{
        axios.post("http://localhost:8080/todos",{task:itemonebyone}).then(success=>{
            console.log(success)
            this.setState({
                list:[...this.state.list,success.data]
            });
        }).catch(err=>console.log(err))
    }
        // this.setState({
        //     list:[...this.state.list,itemonebyone]
        // })
    }
    deleteitem=deleteitem1=>{
        axios.delete("http://localhost:8080/todos/"+deleteitem1).then(success=>{
            console.log(success);
            if(success.status===200 && success.statusText==="OK"){
                this.setState({
                    list:this.state.list.filter(i=>i.id!==deleteitem1)
                })
            }
        })
        // this.setState({
        //     list:this.state.list.filter(i=>i!==deleteitem1)
        // })
    }
    render(){
        return(<div style={{background:"lightgrey",margin:"30px",padding:"10px"}}>
        <Nav1/><Button1 additem={this.additem}/><List1 items={this.state.list} deleteitem={this.deleteitem.bind(this)}/>
        
        </div>);
        }
}
export default appfunction;
