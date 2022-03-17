import { useState } from "react";

export default function Form({setCards}) {

    const [formTitle, setFormTitle] = useState();
    const [formContent, setFormContent] = useState();
    const [counter, setCounter] = useState(0);

    const handleTitleChange = e => {
        setFormTitle(e.target.value);
    }

    const handleContentChange = e => {
        setFormContent(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setCards(
            previousState => [{titre: formTitle, message: formContent, id : counter}, ...previousState]
        );
    }

    return (
        <form className="my-5 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Titre</label>
                <input type="text" className="form-control" placeholder="Titre" onChange={handleTitleChange} />
            </div>
            <div className="mb-3">
                <label>Description</label>
                <input type="text" className="form-control" placeholder="Message" onChange={handleContentChange} />
            </div>      
            <button type="submit" className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Submit</button>
        </form>
    )
}