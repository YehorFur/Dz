let form = document.getElementById('submitForm');
let subjects = [];

function renderSubjects(subjects) {
    let htmlStr = ``;
    for(let index in subjects) {
        htmlStr += `<tr>
            <td>${+index+1}</td>
            <td>${subjects[index].subjects}</td>
            <td>${subjects[index].mark}</td>
            <td><img src="${subjects[index].picture}"></td>
        </tr>`;
    }
    document.getElementById('subjects').value = '';
    document.getElementById('mark').value = '';
    document.getElementById('picture').value = '';
    document.querySelector('tbody').innerHTML = htmlStr;
}

function addSubjects(e) {
    e.preventDefault();
    console.log('We are starting....', e);
    let subjectsObject = {
        subjects: document.getElementById('subjects').value,
        mark: document.getElementById('mark').value,
        picture: document.getElementById('picture').value
    };
    if(!subjectsObject.subjects || !subjectsObject.mark || !subjectsObject.picture) {
        alert('Заполните все поля');
        return;
    }
    subjects.push(subjectsObject);
    renderSubjects(subjects);
}


document.getElementById('submitBtn').addEventListener('click', addSubjects);