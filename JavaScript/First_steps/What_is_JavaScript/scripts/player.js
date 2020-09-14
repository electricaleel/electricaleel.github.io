const para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('名前を入力して下さい');
  
  if (name !== null) {
    para.textContent = 'プレイヤー 1: ' + name;
  } else {
    para.textContent = '名無しさん';
  }
}
