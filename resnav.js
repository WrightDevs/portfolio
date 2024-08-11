 'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.closemodal');
const btnsOpenModal = document.querySelectorAll('.hire' , 'hire1');
//const btnsOpenModal2 = document.querySelectorAll('.hire1');
 
 function hideSideBar(){
        const sidebar = document.querySelector('.sidebar')
       sidebar.style.display = 'none'
       sidebar.style.opacity = "1"
   }

   function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
       sidebar.style.display = 'flex'
    //    sidebar.style.opacity = "1"
   }
console.log(screen.width);

const openModal = function (e) {
   e.preventDefault();
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
 };
 
 const closeModal = function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
 };
 
 btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
 
 btnCloseModal.addEventListener('click', closeModal);
 overlay.addEventListener('click', closeModal);
 
 document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
     closeModal();
   }
 });