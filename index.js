import './style.css';

const onClickAdd = () => {
  // テキストボックスの内容を取得し、初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
  // li生成
  const li = document.createElement('li');

  // div生成, クラス付与
  const div = document.createElement('div');
  div.className = 'list-row';

  // p生成, クラス付与, 文字挿入
  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = todo;

  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    // completebuttonからmovetargetを取得
    // completebuttonから削除ボタンを取得しremove
    const moveTarget = completeButton.closest('li');
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest('li').remove();
    });

    // moveTargetの子に戻すボタンをつける
    // それぞれが参照を持っているので, appendしたら移動する
    moveTarget.firstElementChild.appendChild(backButton);

    document.getElementById('complete-list').appendChild(moveTarget);
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
  // 指定したIDの子にliを追加
  document.getElementById('incomplete-list').appendChild(li);
};

// 指定したIDのタグにクリックすると, onClickAddを追加
document.getElementById('add-button').addEventListener('click', onClickAdd);
