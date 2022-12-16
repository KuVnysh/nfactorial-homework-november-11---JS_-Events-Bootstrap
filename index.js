// const btn = document.getElementById("hider");
// const txt = document.getElementById('text');
// btn.onclick = function(){
//     txt.hidden = true;
//  }


const krest = document.querySelectorAll('.remove-button')
krest.style

let panes = document.querySelectorAll('.pane');

    for(let pane of panes) {
      pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
      // кнопка становится первым потомком плитки (pane)
      pane.firstChild.onclick = () => pane.remove();
    }