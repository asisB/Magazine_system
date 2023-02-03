import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreatePhotographs = () => {
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);
    const [balance, setBalance] = useState('0');
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);
        const photographs = {title, caption, location, image, balance};
        try {
            const response = await fetch('http://localhost:3001/photographer/upload', {
                method: 'POST',
                headers: {"content-Type": "application/json"},
                body: JSON.stringify(photographs)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('New Photographs Added');
            setPending(false);
            history.push('/');
            const blob = await response.blob();
            setImage(URL.createObjectURL(blob));
        } catch (error) {
            console.error(error);
            setPending(false);
        }
    }

    const handleFileChange = event => {
        setImage(URL.createObjectURL(event.target.files[0]));
      };

    return ( 
        <div className="create">
            <h2>Add Photographs</h2>
            <form onSubmit={handleSubmit}>
                <label> Photographs Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label> Photographs Caption:</label>
                <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                required
                />
                <label> Photographs location:</label>
                <textarea
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                />        
                <label>Photographs balance: </label>
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

                <label> Photographs Image:</label>
                <input type="file" onChange= {handleFileChange}/> 
                {image && <img src={image} alt="Image is from server" width={100} height={100}/>}
                <label></label>
                {!isPending && <button >Add Photograph...</button>}
                {isPending && <button >Adding Photograph...</button>}
            </form>
        </div>
     );
}
 
export default CreatePhotographs;