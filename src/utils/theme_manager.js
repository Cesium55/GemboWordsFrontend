function toggle_theme(){
    const current_theme = localStorage.getItem('theme') || 'dark';

    if (current_theme == "light"){
        localStorage.setItem("theme", "dark")
    }
    else{
        localStorage.setItem("theme", "light")
    }


    location.reload()
}

export {toggle_theme}