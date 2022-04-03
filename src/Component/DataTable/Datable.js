import './DataTable.css';
import TableList from '../TableList/TableList';
import AddFruit from '../AddFruit/AddFruit';
import { Routes ,Route } from 'react-router-dom';
import { useState } from 'react';


function DataTable() {
  const initData = [
    {name: "แอปเปิ้ล", URL: "https://sc04.alicdn.com/kf/Uc21f8e3d737e4cad81d95974852e0959I.jpg"},
    {name: "แตงโม", URL: "https://bazarlagbe.net/wp-content/uploads/2021/04/ezgif.com-gif-maker-2.jpg"},
    {name: "ทุเรียน", URL: "https://4.imimg.com/data4/KW/GT/MY-9861216/durian-fruit-500x500.jpg"},
  ]

  const [addNewItem, setAddNewItem] = useState(initData);
  const onAddNewItem = (newItem) => {
    setAddNewItem((prevItem) => {
      return [...prevItem, newItem];
    })
  }

  return (
    <>
    <div className='data_table'>
        <div className="data_table_list">
            <Routes>
                <Route path='/' element={<TableList items = {addNewItem}/>} />
                <Route path='/AddFruit' element={<AddFruit onAddItem={onAddNewItem}/>} />
            </Routes>
        </div>
    </div>
    </>
  );
}

export default DataTable;
