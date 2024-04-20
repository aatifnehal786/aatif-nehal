document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector(".background");
  
    function animateBackground() {
      const xPos = Math.floor(Math.random() * window.innerWidth);
      const yPos = Math.floor(Math.random() * window.innerHeight);
  
      background.style.backgroundPosition = `${xPos}px ${yPos}px`;
  
      requestAnimationFrame(animateBackground);
    }
  
    animateBackground();
  });

  
const todoform = document.querySelector(".form-todo")
console.log(todoform)
const todoInput  = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodotext = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `
        <span class="text">${newTodotext}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
    
    
    `
    newLi.innerHTML = newLiInnerHTML;
    todoList.append(newLi)

    todoInput.value = "";


})

todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;

        targetedLi.remove();

    }
    if(e.target.classList.contains("done")){
        const lispan = e.target.parentNode.parentNode
        lispan.remove();
    }
})