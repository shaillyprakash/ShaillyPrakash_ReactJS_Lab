import React, { useEffect } from "react";
import{useState} from "react";
import IDataList from "../model/IDataList";
import IDataList from "../model/IDataList";
import { getDataFromServer } from "../service/menu";




function ShowData () {

    const [items, setItems] =useState<IDataList
    const[sum,setSum] = useState<number | null>()
    const[rahulSpent, setRahulSpent] =useState<number>(0)
    const[rameshSpent, setRRameshSpent] =useState<number>(0)
    const[showForm, setShowForm] =useState<boolean>(false)
    const [error,setError] =useState<Error | null>(null);

    useEffect(() => {
        const fetItems = async() => {
            try {
                const data = await getDataFromServer();
                setItems(data);
                setSum(data.reduce((res,each)=>( res = res +each.price),0));
            } catch(error: any) {
                setError(error);
            }
        };
        fetItems();
    }, [showForm]);
    const rahulSpent1 : number =0;
    const rameshSpent1 : number =0;
    const shares =(data: IDataList[]) => {
        data.map(each) =>
        each.payeeName =="Rahul" ? (rahulSpent1 = rahulSpent1 +each.price) : (rameshSpent1 = rameshSpent1 +each.price)
        );
        setRahulSpent(rahulSpent1);
        setRameshSpent(rameshspent1);
    }
        const success =() => {
            setShownForm(false);

        }
        const cancel =() => {
            setShownForm(false);

        }

    }
    return (
        <>
        <header id ="page-header">Expense Tracker</header>
        <button id ="Add-Button" onClick={() => setShownForm(true<)}>Add</button>
        {showForm &&
        <div>
            <ExpenseTracker onTrue={success} onClose={cancel} > </ExpenseTracker></ExpenseTracker></div>}

     </div>)

     }
     </>

     <div className="use-inline date header-color"> Data</div>
     <div className="use-inline date header-color"> Product Purchased</div>
     <div className="use-inline date header-color"> Price</div>
     <div className="use-inline date header-color"> style ={{width: 100}}> Payee</div>
    );
}
export default ShowData;