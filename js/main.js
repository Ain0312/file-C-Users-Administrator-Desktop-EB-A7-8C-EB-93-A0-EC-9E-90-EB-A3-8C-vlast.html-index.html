//text
(function () {
    const spanEl = document.querySelector('main h2 span')
    const txtarr = ['wep', 'wepd', 'dg', 'silver' ]

    let index = 0;
    let currentTxt = txtarr[index].split('')

    //write
    function writeTxt(){
        spanEl.textContent += currentTxt.shift()
        if(currentTxt.length !==0){
            //배열 길이가 0이 아니면 출력해야하는 단어가 남아있다.
            setTimeout(writeTxt, (Math.random() * 100))
        }else{
            //배열 길이가 0이면 배열 안에 있는 모든 텍스트가 전부 화면에 출력
            currentTxt = spanEl.textContent.split('')
            setTimeout(deleteTxt, 300)
        }
    }

    //delete
    function deleteTxt(){
        currentTxt.pop()
        spanEl.textContent = currentTxt.join('')
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, (Math.random() * 100))
        }else{
            index = (index + 1)% txtarr[index].split('')
            writeTxt()
        }
    }
    writeTxt()
})()


//scroll

const headerEl = document.querySelector('header')

window.addEventListener('scroll', function(){
    requestAnimationFrame(this.scrollcheck);
})


function scrollcheck(){
    let bY = window,scrollY
    if(bY > 0){
        //스크롤 했다
        headerEl.classList.add('on')
    }else{
        headerEl.classList.remove('on')
    }
}


//move

const animationMove = function(selector){
    //selector 매개변서로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector)
    // 현재 브라우저의 스크롤 정보 (y값)
    const bY = window.scrollY
    // 이동할 대상의 위치 (y값)
    const targetscrollY = targetEl.getBoundingClientRect().top + bY
    // getBoundingClientRect : 요소의 크기와 뷰포트에 대한 상대적인 위치정보 제공
    // 스크롤 이동
    window.scrollTo({top : targetscrollY, behavior: 'smooth'})
}

// 스크롤 이벤트 연결
const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')
for(let i =0; i < scrollMove.length; i++){
    scrollMove[i].addEventListener('click', function(){
        const target = this.dataset.target;
        animationMove(target)
    })
}