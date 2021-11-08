const elLeftListItem = document.querySelectorAll('.left_item')
const left_item_link_wrapper = document.querySelectorAll('.left_item_link_wrapper')


for (const i of elLeftListItem) {
    i.onclick = (e) => {
        for (const il of elLeftListItem) {
            il.classList.remove('left_item_active')
        }
        i.classList.add('left_item_active')
    }
}