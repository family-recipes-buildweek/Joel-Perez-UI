class TeamMember {
    constructor(member, index){
        this.member = member
        if(index === 1 || index === 3){
            this.member.style.flexDirection = 'row-reverse'
        }
        TweenMax.from(this.member, 3, {y:'1000%', ease:Back.easeOut})
    }
}






const team = document.querySelectorAll('.team-member')
const navBar = document.querySelector('.nav-bar')
const hamMenu = document.querySelector('.menu-btn')
navBar.style.position = 'sticky'
// hamMenu.style.position = 'sticky'
// hamMenu.style.right = '0%'

const teamInstance = Array.from(team).map((member, index) => new TeamMember(member, index))

