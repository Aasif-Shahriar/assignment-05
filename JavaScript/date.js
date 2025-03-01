function getDate(){
    let today = new Date();
    let todayDate = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let updateDate = `${todayDate} / ${month} / ${year}`;
    console.log(updateDate)
    document.getElementById('update-time').innerText = updateDate;
};

// getDate()