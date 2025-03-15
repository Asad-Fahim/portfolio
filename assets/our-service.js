function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex'; 
    setTimeout(() => {
        popup.classList.add('active'); 
    }, 10); 
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('active');
    popup.classList.add('closing');
    setTimeout(() => {
        popup.style.display = 'none'; 
        popup.classList.remove('closing'); 
    }, 500); 
}

window.onclick = function(event) {
    let popups = document.getElementsByClassName('popup');
    for (let i = 0; i < popups.length; i++) {
        if (event.target === popups[i]) {
            closePopup(popups[i].id);
        }
    }
}