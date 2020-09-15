const DEF_NAME = 'プレイヤー 1: ';
const para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName() {
  let name = DEF_NAME;
  name = prompt('名前を入力して下さい');
  
  if (name !== null) {
    para.textContent = DEF_NAME + name;
  }
}
