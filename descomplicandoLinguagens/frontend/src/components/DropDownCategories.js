import React from 'react';
import api from '../services/api'

export default function DropDownCategory({ currentValue, handleDropChange, textHelp }) {

    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([
    ])
    const [value, setValue] = React.useState()

    React.useEffect(() => {
        async function getCategories() {
            const response = await api.get('categories')
            setItems(response.data.map(category => <option key={category.name}>{category.name}</option>))
            setLoading(false)
            setValue(currentValue)
        }
        getCategories()
    }, [])

    React.useEffect(() => {
        handleDropChange(value, 'category')
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
