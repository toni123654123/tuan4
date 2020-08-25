function emailIS(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function save() {
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let gender = ''
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('famale').checked) {
        gender = document.getElementById('famale').value;
    }
    if (_.isEmpty(fullname)) {
        fullname = '';
        document.getElementById('fullname-erro').innerHTML = 'Vui lòng nhập lại';
    } else {

        document.getElementById('fullname-erro').innerHTML = '';
    }
    if (_.isEmpty(email)) {
        email = '';
        document.getElementById('email-erro').innerHTML = 'Vui lòng nhập lại';
    } else if (!emailIS(email)) {
        email = '';
        document.getElementById('email-erro').innerHTML = 'Email không đúng định dạng';
    } else {

        document.getElementById('email-erro').innerHTML = '';
    }
    if (_.isEmpty(phone)) {
        phone = '';
        document.getElementById('phone-erro').innerHTML = 'Vui lòng nhập lại';
    } else if (phone.trim().length < 10 || phone.trim().length > 10) {

        document.getElementById('phone-erro').innerHTML = 'Sai số điện thoại';
    } else {

        document.getElementById('phone-erro').innerHTML = '';
    }
    if (_.isEmpty(gender)) {
        gender = '';
        document.getElementById('gender-erro').innerText = 'Vui lòng chọn giới tính'
    } else {

        document.getElementById('gender-erro').innerText = ''
    }
    if (fullname && email && phone && gender) {

        console.log(fullname, email, phone, gender);

        let student = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [];

        student.push({
            fullname: fullname,
            email: email,
            phone: phone,
            gender: gender,
        });
        localStorage.setItem('student', JSON.stringify(student));

        this.renderListStudent();
    }
}

function renderListStudent() {

    let students = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [];

    if (students.length === 0) {

        return false;

        document.getElementById('list-tt').style.display = 'none';
    }
    document.getElementById('list-tt').style.display = 'block';

    let table = `<tr>
            <td>ID</td>
            <td>Họ tên</td>
            <td>Email</td>
            <td>Số điện thoại</td>
            <td>Giới tính</td>
            <td>Hành Động</td>
        </tr>`;
    students.forEach((student, index) => {


        let gender = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';

        index++;

        table += `<tr>
            <td>${index}</td>
            <td>${student.fullname}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${gender}</td>
            <td> <a href="#" onclick="edit" >Sửa</a> | <a href="#" onclick="deleteUser(${index}-1)">Xóa</a> </td>
        </tr>`;
    })
    document.getElementById('list-view').innerHTML = table;
}

function deleteUser(index) {

    let students = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [];

    students.splice(index,1);

    localStorage.setItem('student', JSON.stringify(students));

    renderListStudent();

}

