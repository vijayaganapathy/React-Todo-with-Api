import React from 'react';     

//****function component****/
// const listfunction=(props)=>{
//     return(<div>
//         <ul className="list-group">
//             {props.items.map(i=>{
//                 return(
//                     <li className="list-group-item" key={i}>{i}</li>
//                 );
//             })}
//           </ul>
//      </div>);
// };

class listfunction extends React.Component{
    complete=e=>{
        e.target.style.textDecoration="line-through"
    }
    render(){
        return(
        <div>
           <ul className="list-group">
               {
                   this.props.items.map(i=>{
                   return(
                       <li className="list-group-item" key={i.id}><span onClick={this.complete}>{i.task}</span>
                       <span className="float-right btn btn-primary btn-lg" onClick={this.props.deleteitem.bind(this,i.id)}>Delete</span></li>
                   );
               })}
             </ul>
        </div>                    
        );
    }
}
export default listfunction
//{this.props.handledelete.bind(this,i)}

