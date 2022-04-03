import './AddFruit.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function AddFruit(props) {

    const [fruitName, setFruitName] = useState('');
    const [fruitURL, setFruitURL] = useState('');
    const [redirect, setRedirect] = useState(false);

    const inputFruitName = (e) => {
        setFruitName(e.target.value);
    }

    const inputFruitURL = (e) => {
        setFruitURL(e.target.value);
    }

    const saveItem = (e) => {
        e.preventDefault();
        const itemData = {
            name: fruitName,
            URL: fruitURL
        }
        props.onAddItem(itemData);
        setRedirect(!redirect);
        setFruitName('');
        setFruitURL('');
    }

  return (
    <>
    {(!redirect &&
        <div className="table_add_fruit">
            <div className='back_icon'>
                <Link to="/">
                    <ArrowBackIcon />
                </Link>
            </div>
            <div className="table_add_header">
                <h1>Create</h1>
            </div>
            <div className="form__area">
                <form onSubmit={saveItem}>
                    <div className="form-control">
                        <label>ชื่อผลไม้ :</label>
                        <input type="text" placeholder="ระบุชื่อผลไม้" onChange={inputFruitName} value={fruitName}/>
                    </div>
                    <div className="form-control">
                        <label>รูปผลไม้ :</label>
                        <input type="text" placeholder="URL รูปผลไม้" onChange={inputFruitURL} value={fruitURL}/>
                    </div>
                    <div className="Btn">
                        <Button variant="contained" color="success" type='submit'>
                            เพิ่มข้อมูล
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )}

    {(redirect && <Navigate replace to="/" />)}
    </>
  );
}

export default AddFruit;
