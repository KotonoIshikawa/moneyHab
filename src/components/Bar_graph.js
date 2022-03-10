import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryLine } from 'victory';



const Bar_graph = ({ ExpItems, setExpItems, currentMonth, currentYear }) => {



    /*ExpItemsから今月の支出を抜き出し*/
    
    const data = [];
    const createExp = () => {
        const a = [];
        ExpItems.forEach(element => {
            if(element.Month === currentMonth && element.Year === currentYear){
                a.push({...element.data()});
            }
        });
        setExpItems(a);
    }

    /*victory用*/
    const createData = () => {
        createExp();
        const data = [];
        ExpItems.forEach(element => {
            data.push({x:element.Day, y:element.Amount});
        });
        
        
    };

    useEffect(() => {
        createData();
    }, []);

    /*useEffect(() => {
        createData();
    }, [data]);*/

    
    
    

    return(
        <div className = "BarGraph-Box">
            <VictoryChart>
                <VictoryLine
                    style={{
                        data: { stroke: "#3ab60b" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    data={data}
                />
            </VictoryChart>
        </div>
    );
};

export default Bar_graph;