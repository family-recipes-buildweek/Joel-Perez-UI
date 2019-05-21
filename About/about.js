class TeamMember {
    constructor(member, index){
        this.member = member
        if(index === 1 || index === 3){
            this.member.style.flexDirection = 'row-reverse'
        }
    }
}






const team = document.querySelectorAll('.team-member')
const navBar = document.querySelector('.nav-bar')
navBar.style.position = 'sticky'

const teamInstance = Array.from(team).map((member, index) => new TeamMember(member, index))

