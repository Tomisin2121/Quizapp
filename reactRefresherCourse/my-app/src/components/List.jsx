import Post from './Post'
import classes from './List.module.css'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from 'react'
export default function List(){
        const [enteredBody, setEnteredBody] = useState('');
        const [enteredAuthor, setEnteredAuthor] = useState('');

    function ChangeBodyHandler(event){
            setEnteredBody(event.target.value);
        }
    function ChangeAuthorHandler(event){
            setEnteredAuthor(event.target.value);
        }
    return(
        <>
            <Modal>
            <NewPost onBodyChange={ChangeBodyHandler} onAuthorChange={ChangeAuthorHandler} />
            </Modal>
             <ul className= {classes.posts}>
            
                <li><Post author="Isaac" body='Jesus is working'/></li>
                <li><Post author="Isaac" body='Jesus is working'/></li>
                <li><Post author={enteredAuthor} body={enteredBody}/></li>
            
            </ul>
        </>
    )
}