console.log(firebase) //firebase 사용

var provider = new firebase.auth.GoogleAuthProvider(); //인증 서비스 제공업체

//사용자 인증

const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

//인증 이벤트 처리

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged( user => {
    if (user) {
        //사인 인
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>안녕하세요 ${user.displayName}!</h3> <p>사용자 아이디 : ${user.uid}</p>`;
    } else {
        //사인 인 안 했을 때
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
}

); //sign 했을때, 안 했을때의 상태 보여줌