let toggleSkillBtns = document.getElementsByClassName('expand-icon')


let toggleSkill = (index) => {
    let detailWrapper = document.getElementsByClassName('skill-detail')[index]
    let icon = document.getElementsByClassName('expand-icon')[index]

    if (detailWrapper.style.height == 'auto') {
        detailWrapper.style.height = 0
        icon.style.transform = 'rotate(0deg)'
    } else {
        detailWrapper.style.height = 'auto'
        icon.style.transform = 'rotate(-90deg)'
    }



    console.log('Detail Wrapper:', detailWrapper.style.height)
}

for (let i = 0; i < toggleSkillBtns.length; i++) {
    let button = toggleSkillBtns[i]
    button.addEventListener('click', () => toggleSkill(i))
}