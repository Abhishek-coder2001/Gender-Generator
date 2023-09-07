
let inp = document.getElementById('input');
let result = document.getElementsByClassName('Result')[0];
let btn = document.querySelector('button');

async function fetchData() {
    const name = inp.value;
    if (!name) {
        alert("Enter a Name!");
        return;
    }

    try {
        const rawData = await fetch(`https://api.genderize.io/?name=${name}`);
        const data = await rawData.json();
        console.log(data);

        if (data.gender) {
            result.textContent = `Gender: ${data.gender}`;
        } else {
            result.textContent = `No Data found for ${name}`;
        }
    } catch (error) {
        console.error("Error Fetching Data", error);
    }
}

btn.addEventListener('click', () => {
    fetchData();
});



