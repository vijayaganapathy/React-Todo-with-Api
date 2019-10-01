import React from 'react';
// const buttonfunction=()=>{
//     return(
//         <div>
//             <input type="button" value="ADD YOUR THING" className="btn btn-primary btn-lg btn-block" style={{margin:"10px 1px 10px 1px"}}/>
//         </div>
//     );
// };

class buttonfunction extends React.Component{
    state={input:""};
    handleinput=event=>{
        this.setState({
            input:event.target.value
        })
    }
    handlesubmit=e=>{
        this.props.additem(this.state.input);
        this.setState({input:""});
    }

    render(){
        return(
                    <div>
                        <input type="text" className="form-control form-control-lg , border border-primary" placeholder="type here to add your task" 
            style={{margin:"10px 1px 10px 1px"}} onChange={this.handleinput}
            value={this.state.input}/>

                         <input type="button" value="ADD YOUR THING" className="btn btn-primary btn-lg btn-block"
                         style={{margin:"10px 1px 10px 1px"}}
                         onClick={this.handlesubmit}/>
                     </div>
                 );      
    }
}
export default buttonfunction
