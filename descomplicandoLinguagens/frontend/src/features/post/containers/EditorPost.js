import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';

class EditorPost extends Component {

    constructor(props) {
        super(props);

        this.state = props.post
        this.setState = props.setPost
        this.handleChange = this.handleChange.bind(this);
        this.onEditorChange = this.onEditorChange.bind(this);
    }

    onEditorChange(evt) {
        this.setState(evt.editor.getData());
    }

    handleChange(changeEvent) {
        this.setState(changeEvent.target.value);
    }

    render() {
        return (
            <div>
                <CKEditor
                    data={this.state.html}
                    // type="inline"
                    onChange={this.onEditorChange} />
                {/* <EditorPreview data={this.state.data} /> */}
                {/* <button type="button" className="btn btn-round btn-primary tagAddBtn" onClick={this.state.state}>
                    Salvar
                </button> */}
            </div>
        )
    }
}

// class EditorPreview extends Component {
//     render() {
//         return (
//             <div className="editor-preview">
//                 <h2>Rendered content</h2>
//                 <div dangerouslySetInnerHTML={{ __html: this.props.data }}></div>
//             </div>
//         );
//     }
// }

export default EditorPost;