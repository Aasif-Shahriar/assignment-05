const buttons = document.querySelectorAll('.complete-btn');

for(let i = 0; i < buttons.length; i++){
    const button = buttons[i];

    button.addEventListener('click', function(){
        
        alert('Board updated Successfully');

        const taskUpdate = document.getElementById('task-update');
        let convTaskUpdate = Number(taskUpdate.innerText);
        const taskCount = document.getElementById('task-count');
        let convTaskCount = Number(taskCount.innerText);

        if(convTaskCount > 0){
            convTaskCount--;
            taskCount.innerText = convTaskCount;

            convTaskUpdate++;
            taskUpdate.innerText = convTaskUpdate;

            button.setAttribute('disabled', true);

            button.style.background = '#9BA8F8';

            if(convTaskCount === 0){
                alert("Congratulations! You've Completed All The Task. ");
            }
        }
        
    });

}