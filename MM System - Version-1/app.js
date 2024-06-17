var students = [
    {
        name: 'Bala',
        id: 1,
        mail: "balasuthen103@gmail.com",
        course: "web development",
        status: "Active",
        feedback: 'Good',
    },
    {
        name: 'Hariharan',
        id: 2,
        mail: "harihari1234@gmail.com",
        course: "C Language",
        status: "In-Active",
        feedback: 'Good',
    },
    {
        name: 'Ramesh',
        id: 4,
        mail: "rameshmoorthy456@gmail.com",
        course: "UI/UX Design",
        status: "Active",
        feedback: 'Well-Known',
    },
];

// Function to switch content sections
function showContent(sectionId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach((content) => content.classList.add('hidden'));

    const section = document.getElementById(sectionId);
    section.classList.remove('hidden');
}

// Function to add rows to the table
function populateTable() {
    const tableBody = document.getElementById('main');
    tableBody.innerHTML = ''; // Clear the table

    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.id}</td>
                <td>${student.mail}</td>
                <td>${student.course}</td>
                <td>${student.status}</td>
                <td>${student.feedback}</td>
                <td><button class="delBtn" onclick="deleteStudent(${index})">Delete</button></td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}

function searchStudent() {
    const searchInput = document.getElementById('search').value.trim();
    if (!searchInput) {
        Swal.fire({
            icon: 'warning',
            title: 'Empty Input',
            text: 'Please enter a member name to search.',
        });
        return;
    }

    const student = students.find((s) => s.name.toLowerCase() === searchInput.toLowerCase());

    if (student) {
        Swal.fire({
            title: 'Member Found',
            text: `Name: ${student.name}\nMail-id: ${student.mail}\nCourse: ${student.course}\nStatus: ${student.status}`,
            icon: 'success',
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Member Not Found',
            text: `No member found with the name "${searchInput}".`,
        });
    }

    document.getElementById('search').value = ''; // Clear the input
}

function addStudent() {
    Swal.fire({
        title: 'Add New Member',
        html:
            '<input id="member-name" class="swal2-input" placeholder="Name">' +
            '<input id="member-id" class="swal2-input" placeholder="ID">' +
            '<input id="member-mail" class="swal2-input" placeholder="E-mail">' +
            '<input id="member-course" class="swal2-input" placeholder="Course">' +
            '<input id="member-status" class="swal2-input" placeholder="Status">' +
            '<input id="member-feedback" class="swal2-input" placeholder="Feedback">',
        preConfirm: () => {
            const name = document.getElementById('member-name').value.trim();
            const id = parseInt(document.getElementById('member-id').value);
            const mail = document.getElementById('member-mail').value.trim();
            const course = document.getElementById('member-course').value.trim();
            const status = document.getElementById('member-status').value.trim();
            const feedback = document.getElementById('member-feedback').value.trim();

            if (!name || isNaN(id) || !mail || !course || !status || !feedback) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Input',
                    text: 'Please provide valid member details.',
                });
                return false; // Prevent closing the dialog
            }

            return { name, id, mail, course, status, feedback };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const newStudent = result.value;
            students.push(newStudent); // Add the new student to the list
            populateTable(); // Refresh the table
        }
    });
}

function deleteStudent(index) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
    }).then((result) => {
        if (result.isConfirmed) {
            students.splice(index, 1); // Remove the student
            populateTable(); // Refresh the table
            Swal.fire({
                title: 'Deleted!',
                text: 'The member has been deleted.',
                icon: 'success',
            });
        }
    });
}

// Populate the table when the script is first loaded
populateTable();
