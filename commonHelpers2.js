import"./assets/modulepreload-polyfill-ec808ebb.js";const r=document.querySelector(".btn"),n=document.querySelector(".fetch-user-list"),o=document.querySelector(".clean-list");r.addEventListener("click",()=>{i().then(e=>s(e)).catch(e=>console.log(e))});o.addEventListener("click",()=>{n.innerHTML=""});function i(){return fetch("https://jsonplaceholder.typicode.com/users").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function s(e){const c=e.map(t=>`<li>
        <p><b>Name</b>: ${t.name}</p>
        <p><b>Email</b>: ${t.email}</p>
        <p><b>Company</b>: ${t.company.name}</p>
        </li>`).join("");return list=n.insertAdjacentHTML("beforeend",c)}
//# sourceMappingURL=commonHelpers2.js.map
