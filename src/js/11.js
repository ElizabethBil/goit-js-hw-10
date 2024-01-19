const btn = document.querySelector(".btn");
const userList = document.querySelector(".fetch-user-list");
const cleanList = document.querySelector(".clean-list");
let cancelFetching = false;

btn.addEventListener("click", () => {
    fetchUsers()
        .then((users) => renderUsers(users))
        .catch((error) => console.log(error));
});

cleanList.addEventListener("click", () => {
    cancelFetching = true;
    userList.innerHTML = "";
})

function fetchUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json()
    })
};


function renderUsers(users) {
    const markup = users.map((user) => {
        return `<li>
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
        </li>`
    }).join("");

    return list = userList.insertAdjacentHTML("beforeend", markup);
    
};

