 //header sticky ========]
 window.addEventListener('scroll', function() {
  var header = document.querySelector('.main-header');
  var scrollPosition = window.scrollY;
  let menuMainHeader=document.querySelectorAll(" .main-header .menu ")



  if (scrollPosition > 170) {
    header.classList.add('sticky-header');
    menuMainHeader.forEach(ele=>{
      ele.style.top="92px"
    })

  } else {
    header.classList.remove('sticky-header');
      menuMainHeader.forEach(ele=>{
      ele.style.top="119px"
    })
  }
});
//  / hidden user notofication

const hidBtn=document.getElementById('icon-hidden');
const messageNot=document.getElementById('messages');
 if(hidBtn){
hidBtn.addEventListener('click',()=>{
   const services =document.getElementById('services')
  messageNot.classList.remove('visible')
})
function toggleElement() {
    messageNot.classList.toggle('visible');
  }
}
  // تنفيذ عرض وإخفاء العنصر كل ثلاث ثوانٍ
  setTimeout(toggleElement, 3000);

/// header links and show and hide menue
document.addEventListener('DOMContentLoaded', function() {
    let linkP = document.getElementById("peple_links");
    let menu1 = document.getElementById('menu1');
    let linkC = document.getElementById("company_links");
    let menu2 = document.getElementById('menu2');
    let menu3 = document.getElementById('menu3');
    let linkV = document.getElementById("legal_links");
  
    if (linkC) {
      linkC.addEventListener('mouseover', () => {
        menu2.classList.add('show');
        menu1.classList.remove('show');
        menu3.classList.remove('show');
      });
    }
  
    if (menu2) {
      menu2.addEventListener('mouseleave', () => {
        menu2.classList.remove('show');
      });
    }
  
    if (linkP) {
      linkP.addEventListener('mouseover', () => {
        menu1.classList.add('show');
        menu2.classList.remove('show');
        menu3.classList.remove('show');
      });
    }
  
    if (menu1) {
      menu1.addEventListener('mouseleave', () => {
        menu1.classList.remove('show');
      });
    }
  
    if (linkV) {
      linkV.addEventListener('mouseover', () => {
        menu3.classList.add('show');
        menu2.classList.remove('show');
        menu1.classList.remove('show');
      });
    }
  
    if (menu3) {
      menu3.addEventListener('mouseleave', () => {
        menu3.classList.remove('show');
      });
    }
  });
// side menu in small screen 

// links sub menu 
//first link
let subLink1=document.getElementById('sibar_Sub_link1');
let subMenu1=document.getElementById('sibar_Sub_menu1');
let subUparrow1=document.getElementById('sibar_Sub_Uparow1');
let subDownarrow1=document.getElementById('sibar_Sub_Updown1');
// second link 
let subLink2=document.getElementById('sibar_Sub_link2');
let subMenu2=document.getElementById('sibar_Sub_menu2');
let subUparrow2=document.getElementById('sibar_Sub_Uparow2');
let subDownarrow2=document.getElementById('sibar_Sub_Updown2');
// three link 
let subLink3=document.getElementById('sibar_Sub_link3');
let subMenu3=document.getElementById('sibar_Sub_menu3');
let subUparrow3=document.getElementById('sibar_Sub_Uparow3');
let subDownarrow3=document.getElementById('sibar_Sub_Updown3');
if(subLink1){
    subLink1.addEventListener("click",()=>{
        if(subUparrow1.classList.contains('d-none')){
            subUparrow1.classList.remove('d-none')
            subDownarrow1.classList.add('d-none')
            subMenu1.classList.remove('d-none')
        }
        else{
            subUparrow1.classList.add('d-none')
            subDownarrow1.classList.remove('d-none')
            subMenu1.classList.add('d-none')
        }
    
    })
}

if(subLink2){

subLink2.addEventListener("click",()=>{
    if(subUparrow2.classList.contains('d-none')){
        subUparrow2.classList.remove('d-none')
        subDownarrow2.classList.add('d-none')
        subMenu2.classList.remove('d-none')
    }
    else{
        subUparrow2.classList.add('d-none')
        subDownarrow2.classList.remove('d-none')
        subMenu2.classList.add('d-none')
    }

})
    
}

if(subLink3){

    subLink3.addEventListener("click",()=>{
        if(subUparrow3.classList.contains('d-none')){
            subUparrow3.classList.remove('d-none')
            subDownarrow3.classList.add('d-none')
            subMenu3.classList.remove('d-none')
        }
        else{
            subUparrow3.classList.add('d-none')
            subDownarrow3.classList.remove('d-none')
            subMenu3.classList.add('d-none')
        }
    
    })
        
    }
// comment of rating  التقييمات 

let form =`
<form action="" class="mt-2" id='form'>
<div class="row">
  <div class="col-12 col-md-6">
  <div class="mb-3">
  <small for="name" class="form-label"> الإسم الكامل <span class="text-danger">*</span></small>
  <input type="text" class="form-control" name="name" maxlength="20" data-parsley-required-message="هذه القيمة مطلوبة" required="" id="name" autocomplete="off">
  </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="mb-3">
    <small for="email" class="form-label"> رقم الهاتف<span class="text-danger">*</span></small>
    <input type="number" class="form-control" name="phone" data-parsley-type-message="يجب أن يكون بريداُ إلكترونياً صالحاً" data-parsley-required-message="هذه القيمة مطلوبة" required="" id="phone" aria-describedby="emailHelp" autocomplete="off">
    </div>
    </div>
  <div class="col-12 col-md-6">
  <div class="mb-3">
  <small for="email" class="form-label">البريد الإلكتروني<span class="text-danger">*</span></small>
  <input type="email" class="form-control" name="email" data-parsley-type-message="يجب أن يكون بريداُ إلكترونياً صالحاً" data-parsley-required-message="هذه القيمة مطلوبة" required="" id="email" aria-describedby="emailHelp" autocomplete="off">
  </div>
  </div>
  <div class="mb-3">
  <small for="comment" class="form-label"> التعليقات<span class="text-danger">*</span></small>
  <textarea name="comment" class="form-control" required="" id="comment" rows="5" data-parsley-required-message="هذه القيمة مطلوبة" autocomplete="off"></textarea>
  </div>
  <div class="" dir="rtl">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" required="" data-parsley-required-message="هذه القيمة مطلوبة" autocomplete="off" data-parsley-multiple="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
  أوافق على <a class="text-success" href="" target="”_blank”">سياسة الخصوصية</a>  
  </label>
  </div>
  </div>
  <button  class="btn btn-danger mt-4" id="btn_reply-form">إرسال </button>
  </div>
</form>`

let replay = document.querySelectorAll('.replay');
replay.forEach(ele=>{
  ele.addEventListener("click",()=>{
    let div =document.createElement('div');
    div.innerHTML=form;
   let content=document.querySelector("form");
    if(content.style.display='none'){
      ele.after(div)

    }
  })
})

  

// // replay content 



// let replayContent=`                <div class="replay_box p-2" id=">
// <div class="replay-head d-flex justify-content-between">
//  <div class="user_name d-flex align-items-center"> 
//   <span class="p-2 d-flex align-items-center justify-content-center rounded-circle bg-info text-uppercase"> AM</span> <span class="me-2" id='commentName'> </span></div>
// <div class="replay_date d-flex align-items-center">7/8/2023</div>
// </div>
// <div class="replay-rate me-4 mt-1">
//   <i class="fa-solid fa-star complete"></i>
//   <i class="fa-regular fa-star"></i>
//   <i class="fa-regular fa-star"></i>
//   <i class="fa-regular fa-star"></i>
//   <i class="fa-regular fa-star"></i>
// </div>
// <div class="comment_body me-4 ">
//   <p class=" fw-normal" id="commentBody">
   
//   </p>
// </div>
// <div class="comment_replay_icon me-4" id="replay">
//   <i class="fa-solid fa-reply p-0 m-0 "></i> <span> رد </span>
// </div>

// </div>`

// let buttonS=document.getElementById('btn_reply-form')
// let nameU=document.getElementById("name");
// let number=document.getElementById("number");
// let email=document.getElementById("email");
// let comment=document.getElementById("comment");
// let form1=document.getElementById('form')

// let userName=document.getElementById('commentName');
// let commentBody=document.getElementById('commentBody');

// if(buttonS){

//     buttonS.addEventListener("click",(e)=>{
//         e.preventDefault();
//         e.stopPropagation()
//         userName.innerHTML=nameU.value;
//         commentBody.innerHTML=comment.value;
//         let div =document.createElement('div');
//         div.innerHTML=replayContent;
//         form1.after(div)
//     })
// }


//  table page content 

let Container =document.getElementById("ez-toc-container");
let hidContBtn=document.getElementById("hidCbtn");
let showContBtn=document.getElementById("showCbtn");
if(Container){
hidContBtn.addEventListener("click",()=>{
  Container.style.height="185px";
  hidContBtn.style.display='none';
  showContBtn.style.display="block";
  Container.scrollIntoView({ behavior: 'smooth' })
})
showContBtn.addEventListener("click",()=>{
  Container.style.height="auto";
  hidContBtn.style.display='block';
  showContBtn.style.display="none";
  Container.scrollIntoView({ behavior: 'smooth' })

})}