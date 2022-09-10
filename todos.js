
const addHandalar = () => {
    let existingEntries = JSON.parse(localStorage.getItem('todo'));
    if (existingEntries === null) existingEntries = [];
    const inputfild = document.getElementById('input-fild');
    const inputFilevalue = inputfild.value;
    if (inputFilevalue === "") return;
    inputfild.value = "";
    const entry = {
        title: inputFilevalue,
        id: 152,
    };
    existingEntries.push(entry);
    localStorage.setItem('todo', JSON.stringify(existingEntries));
    getitemIntodo();

}


const getitemIntodo = () => {
    const gettitle = JSON.parse(localStorage.getItem('todo'));
    const ulItems = document.getElementById('ul-items');
    ulItems.innerHTML = '';
    gettitle.forEach((title, index) => {

        const ul = document.createElement('ul');
        ul.classList = "container w-50 me-auto mb-2 mb-lg-0";
        ul.innerHTML = `
                <li id="li-element" class="text-light my-2 d-flex justify-content-around ">
                    <h4>${title.title}</h4>
                    <button onclick="deleteItem(${index})" class="btn btn-primary" type="submit">cancel</button>
                </li>
        `;
        ulItems.appendChild(ul);
    });
}


const clearitem = () => {
    localStorage.removeItem("todo");
    getitemIntodo();
}

const deleteItem = (index) => {
    let existingEntries = JSON.parse(localStorage.getItem('todo'));
    existingEntries.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(existingEntries));
    getitemIntodo();
}

getitemIntodo();




{
    const objArr = [
        { name: 'Eleven', show: 'Stranger Things' },
        { name: 'Jonas', show: 'Dark' },
        { name: 'Mulder', show: 'The X Files' },
        { name: 'Ragnar', show: 'Vikings' },
        { name: 'Scully', show: 'The X Files' },
    ];
    remainingArr = objArr.filter(data => data.name != 'Ragnar');
    // console.log(remainingArr);
}









































// {
//     function addEntry() {
//         // Parse any JSON previously stored in allEntries
//         var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
//         if (existingEntries == null) existingEntries = [];
//         var entryTitle = document.getElementById("input-fild").value;
//         var entryText = document.getElementById("entryText").value;
//         var entry = {
//             "title": entryTitle,
//             "text": entryText
//         };
//         localStorage.setItem("entry", JSON.stringify(entry));
//         // Save allEntries back to local storage
//         existingEntries.push(entry);
//         localStorage.setItem("allEntries", JSON.stringify(existingEntries));
//     };
// }