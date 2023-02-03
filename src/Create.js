import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [balance, setBalance] = useState('0');
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    const handleSubmit =(e) => {
        e.preventDefault();
        const journalist = {title, body, balance};
        setPending(true)
        fetch('http://localhost:3001/journalist/', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(journalist)
        }).then(() => {
            console.log('New Article Added');
            setPending(false)
            history.push('/');
        })

    }

    return ( 
        <div className="create">
            <h2>Add Article</h2>
            <form onSubmit={handleSubmit}>
                <label> Article Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label> Article Body:</label>
                <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                />
                <label>Article balance: </label>
                <select
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                >
                    <option value="0"> 0</option>
                    <option value="20"> 20</option>
                    <option value="40"> 40</option>
                    <option value="60"> 60</option>
                    <option value="80"> 80</option>
                    <option value="100"> 100</option>
                    <option value="120"> 120</option>
                    <option value="140"> 140</option>
                    <option value="160"> 160</option>
                    <option value="180"> 180</option>
                </select>
                {!isPending && <button >Add Article...</button>}
                {isPending && <button >Adding Article...</button>}
                
            </form>
        </div>
     );
}
 
export default Create;