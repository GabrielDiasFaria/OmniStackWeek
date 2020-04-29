import React, { useState } from 'react'

const reactCryptGsm = require("react-crypt-gsm")

export default function ListMidia(
    {
        endAddMidia
    }
) {

    const initialFormState = {
        name: '',
        file: ''
    }

    const [midia, setMidia] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setMidia({ ...midia, [name]: value })
    }

    const handleFile = (e) => {

        let file = e.target.files[0]

        let reader = new FileReader(file)
        reader.readAsDataURL(file)

        reader.onload = (e) => {
            setMidia({ ...midia, "file": e.target.result })
        }
    }

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

    return (
        <form className="col-sm-12"
            onSubmit={event => {
                event.preventDefault()

                endAddMidia(midia)
                setMidia(initialFormState)
            }}
        >
            <div className="row">
                <div className="col-sm-2">
                    <img src={midia.file} className="imgPreview" />
                </div>
                <div className="col-sm-6">
                    <div className="position-center">
                        <div className="form-group">
                            <label for="midia_name" className="bmd-label-floating">Midia - Name</label>
                            <input placeholder="Name" name="name" className="form-control" id="midia_name" value={midia.name} onChange={handleInputChange}></input>
                        </div>

                        <div className="form-group">
                            <label for="midia_file" className="bmd-label-floating">Arquivo</label>
                            <input placeholder="File" type="file" name="file" id="midia_file" onChange={(e) => handleFile(e)}></input>
                        </div>
                        <button type="submit" className="btn btn-warning">Salvar</button>
                    </div>
                </div>
            </div>
        </form>
    )

}
