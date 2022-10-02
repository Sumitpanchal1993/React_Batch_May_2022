import React from "react";

class TableStructureComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <table border={1} style={{textAlign: 'center', marginLeft: '100px'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone no</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((item) =>(
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.phoneNo}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default TableStructureComponent