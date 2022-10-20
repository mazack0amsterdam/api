window.addEventListener('DOMContentLoaded', async () => {
   var userList = new UserList('#app', 'https://reqres.in/api/users');
 
   userList.render();
 })
 var UserList = function (selector, apiUrl) {
   this.app = document.querySelector(selector) || [];
   this.apiUrl = apiUrl;
   users = [];
 }
 
   UserList.prototype.render = async function () {
   users = await this.get();
   var list = document.createElement('section');
   list.classList.add('UserList');
 
   users.map(user => {
     var item = document.createElement('article');
     item.classList.add('User');
     var avatar = document.createElement('img');
     avatar.classList.add('User__avatar')
     avatar.setAttribute('src', user.avatar)
     item.appendChild(avatar);
     var name = document.createElement('h3');
     name.classList.add('User__name')
     name.innerText = user.first_name;
     item.appendChild(name);
     var email = document.createElement('p');
     email.classList.add('User__email');
     email.innerText = user.email;
     item.appendChild(email);
     list.appendChild(item);
   })
   this.app.appendChild(list);
 }



 UserList.prototype.get = async function () {
   return { data } = await fetch(this.apiUrl)
     .then((response) => response.json())
     .then((data) => data.data);
 } 