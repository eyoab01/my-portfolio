const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger-close");
const navMenu = document.querySelector(".hidden-menu");
const navLinks = document.querySelectorAll(".hidden-list");

hamburgerClose.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach((ele) => ele.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}));

/*popup*/

const Project = [
  {
    id: 0,
    img: './images/Snapshoot-Portfolio-4.png',
    header: 'Multi-Post Stories',
    lists: ['CANOPY', 'Back End', '2015'],
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    plang: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 1,
    img: './imgages/Snapshoot-Portfolio.png',
    header: 'Facebook 360',
    lists: ['FACEBOOK', 'Back End', '2015'],
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    plang: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 2,
    img: './imgages/Snapshoot-Portfolio-1.png',
    header: 'Uber Navigations',
    lists: ['UBER', 'Back End', '2015'],
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    plang: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 3,
    img: './imgages/Snapshoot-Portfolio-2.png',
    header: 'Multi-Post Stories',
    lists: ['CANOPY', 'Back End', '2015'],
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    plang: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 4,
    img: './imgages/Snapshoot-Portfolio-3.png',
    header: 'Multi-Post Stories',
    lists: ['FACEBOOK', 'FULL Stack Dev', '2015'],
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    plang: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
];


const close = document.querySelector('#main-pop-head > span');
const PopUp = document.querySelector('#main-pop');
const cards = document.querySelectorAll('.card a');

 close.addEventListener('click', () => {
   PopUp.classList.toggle('hidden');
 }); 

const makPopuppart = ({
  img, header, lists, paragraph, plang,
}) => {
  const pohead = document.querySelector('#main-pop-head > h2');
  const Polist = document.querySelectorAll('#main-pop ul > li');
  const Poimg = document.querySelector('#pop-image > img');
  const Potext = document.querySelector('#detail-pop > p');
  const Pomenu = document.querySelector('#detail-pop menu');

  pohead.innerHTML = header;
  Potext.innerHTML = paragraph;
  Poimg.src = img;
  Polist.forEach((ele, i) => { ele.innerHTML = lists[i]; });
  Pomenu.innerHTML = '';
  plang.forEach((ele) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = ele;
    Pomenu.appendChild(listItem);
  });
  PopUp.classList.toggle('hidden');
};

cards.forEach((ele, i) => {
  ele.addEventListener('click', () => {
    makPopuppart(Project[i]);
  });
});
