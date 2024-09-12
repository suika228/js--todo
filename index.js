import './style.css';

const onClickAdd = () => {
  // テキストボックスの内容を取得し、初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  // li生成
  const li = document.createElement('li');

  // div生成, クラス付与
  const div = document.createElement('div');
  div.className = 'list-row';

  // p生成, クラス付与, 文字挿入
  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = inputText;

  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    alert('完了');
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    // 親の親のliを削除
    const deleteTarget = deleteButton.closest('li');
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  });

  // divの子にp, button, liの子にdiv
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  console.log(li);
  // 指定したIDの子にliを追加
  document.getElementById('incomplete-list').appendChild(li);
};

// 指定したIDのタグにクリックすると, onClickAddを追加
document.getElementById('add-button').addEventListener('click', onClickAdd);
