import React from 'react';
import api from '../services/api'

export default function DropDownTags({ currentValue, handleDropChange, textHelp }) {

    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([
    ])
    const [value, setValue] = React.useState()

    React.useEffect(() => {
        async function getTags() {
            const response = await api.get('tags')
            setItems(response.data.map(tag => <option key={tag.name}>{tag.name}</option>))
            setLoading(false)
            setValue(currentValue)
        }
        getTags()
    }, [])

    React.useEffect(() => {
        handleDropChange(value, 'tag')
    }, [])

    return (
        <div class="form-group">
            <label className="control-label">{textHelp}</label>
            <div className="">
                <select
                    className="form-control"
                    disabled={loading}
                    value={value}
                    onChange={e => setValue(e.currentTarget.value)}
                >
                    {items}
                </select>
            </div>
        </div>

    )
}
