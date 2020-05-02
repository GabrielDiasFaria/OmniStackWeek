import React from 'react'
import api from '../../../services/api'

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.endAddMidia = props.endAddMidia
    }
    onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        api.post('midias', formData, config).then((response) => {
            console.log(response)
            this.endAddMidia(response)
        }).catch(function (error) {
            console.log(error.response)
        })
    }
    onChange(e) {
        this.setState({ file: e.target.files[0] });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="file" name="myImage" onChange={this.onChange} />
                <br></br>
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default ReactUploadImage