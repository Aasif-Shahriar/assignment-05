const buttons = document.querySelectorAll('.complete-btn');

for(let i = 0; i < buttons.length; i++){
    const button = buttons[i];

    button.addEventListener('click', function(){
        //alert on click
        alert('Board updated Successfully');

        // task assigned count increase and decrease
        const taskUpdate = document.getElementById('task-update');
        let convTaskUpdate = Number(taskUpdate.innerText);
        const taskCount = document.getElementById('task-count');
        let convTaskCount = Number(taskCount.innerText);

        if(convTaskCount > 0){
            //decrease
            convTaskCount--;
            taskCount.innerText = convTaskCount;
            //increase
            convTaskUpdate++;
            taskUpdate.innerText = convTaskUpdate;
            //disabled complete button
            button.setAttribute('disabled', true);
            button.style.background = '#9BA8F8';
            //alert on completed all task
            if(convTaskCount === 0){
                alert("Congratulations! You've Completed All The Task. ");
            }
        }; 

        //adding history card
        const clickedHistory = document.getElementById('clicked-history');
        const div = document.createElement('div');
        clickedHistory.appendChild(div);
        div.classList.add('bg-primary','p-4', 'rounded-lg');
        div.innerText = `You have Complete The Task Add Dark Mode at 12:48:15 PM`;
        //clearing history card
        document.getElementById('clear-history-btn')
        .addEventListener('click', function(){
            clickedHistory.innerHTML = "";
        });
    });

}