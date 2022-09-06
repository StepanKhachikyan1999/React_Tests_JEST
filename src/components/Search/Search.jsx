import React from 'react'
import classes from './Search.module.css'
import cn from 'classnames'

const Search = (props) => {
    const {
        value,
        onChange,
        children = 'Search',
        placholder = 'search...'
    } = props

    const inputClass = cn({
        [classes.input]:true,
        [classes.filled]:value.length
    })
  return (
    <label className={classes.label}>
        {children}
        <input
        className={inputClass}
        type="text"
        value={value}
        placeholder={placholder}
        onChange={onChange}
         />
    </label>
  )
}

export default Search