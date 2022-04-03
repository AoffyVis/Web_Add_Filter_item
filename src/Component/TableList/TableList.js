import './TableList.css';
import Fruit from '../Fruit/Fruit';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useState } from 'react';

function TableList({items}) {
  const [search, setSearch] = useState('');

  const filterData = items.filter(value => {
    if(search !== '') {
      return JSON.stringify(value)?.toLowerCase().includes(search.toLowerCase());
    }
    return value;
  })

  return (
    <>
        <div className="table_list">
            <div className="data_table_header">
                <h1>ผลไม้</h1>
            </div>
            <div className="data_table_CTA">
                <div>
                <Link to="/AddFruit">
                    <Button variant="contained" color="success">
                        เพิ่มผลไม้
                    </Button>
                </Link>
                </div>
                <div>
                    <input type="text" placeholder="Search here" onChange={(e) => setSearch(e.target.value)}/>
                </div>
            </div>
            <div className="table_header">
                <h4>ชื่อผลไม้</h4>
            </div>
            <div className="table_body">
            {filterData.map((element, index) => {
                return <Fruit {...element} key={index}/>
            })}
            </div>
        </div>
    </>
  );
}

export default TableList;
