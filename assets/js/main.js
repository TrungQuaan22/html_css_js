const languagueDropDown = document.querySelector(".language-dropdown")
const languageSelected = document.querySelector(".language-selected")
const languageList = document.querySelector('.language-list')
const languageItems = document.querySelectorAll(".language-list li")

//click ẩn hiện
languageSelected.addEventListener('click', () => {
    languageList.style.display = 
    languageList.style.display === 'none' || !languageList.style.display
      ? 'block'
      : 'none';
})
//click ra ngoài cũng đóng
document.addEventListener('click', (event) => {
    if(!languagueDropDown.contains(event.target)) {
        languageList.style.display = 'none'
    }
})
// logic chọn ngôn ngữ
languageItems.forEach((item) => {
    item.addEventListener('click', () => {
        const selectedLanguague = item.querySelector('span').innerText
        const selectedFlag = item.querySelector('img').src
        //cập nhật ngôn ngữ
        languageSelected.querySelector('span').innerText = selectedLanguague
        languageSelected.querySelector('img').src = selectedFlag
        //ẩn danh sách sau khi chọn
        languageList.style.display= 'none'
    })
})

// đóng/ mở sidebar
const sidebar = document.querySelector('.sidebar')
const sidebarButton = document.querySelector('.header-bar')
sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed')
})