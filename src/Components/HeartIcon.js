const HeartIcon = ({ icon, handleClick, pid }) => {
    return <i className={icon} onClick={() => handleClick(pid)}></i>

}

export default HeartIcon