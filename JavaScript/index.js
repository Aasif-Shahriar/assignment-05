const buttons = document.querySelectorAll('.complete-btn');

for(let i = 0; i < buttons.length; i++){
    const button = buttons[i];

    button.addEventListener('click', function(){
        alert('Board updated Successfully');

        const taskUpdate = document.getElementById('task-update');
        let convTaskUpdate = Number(taskUpdate.innerText);
        const taskCount = document.getElementById('task-count');
        let convTaskCount = Number(taskCount.innerText);


        const clickedHistory = document.getElementById('clicked-history');
        const div = document.createElement('div');
        clickedHistory.appendChild(div);
        div.classList.add('bg-primary','p-4', 'rounded-lg');
        div.innerText = `You have Complete The Task Add Dark Mode at 12:48:15 PM`;

        document.getElementById('clear-history-btn')
        .addEventListener('click', function(){
            clickedHistory.innerHTML = "";
        })

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
        }; 
        
    });

}