// ==============================   Check If  There's Local Storage Color Option  ==========================
//========================================================================================================

let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
    document.documentElement.style.setProperty('--main--color',mainColors);
    // Remove Active Class From All Colors List Item ====

    document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove("active");
        // Add Active Class On Element With Data-Color ===  Local Storage Item
        if(element.dataset.color === mainColors){
           // Add Active Class
           element.classList.add("active");
        }
            });
}
 // Random Background Option
 let backgroundOption = true;
 //Variable To  Control  Background Interval 
 let backgroundInterval;
 // Check if There's Local Storage Rabdom Background Item
 let backgroundLocalItem = localStorage.getItem("background_option");
 // Check if Random Background LOcal Storage Is Empty
 if (backgroundLocalItem !== null) {
   console.log(backgroundLocalItem);
   console.log(typeof(backgroundLocalItem));
   if (backgroundLocalItem === 'true') {
    backgroundOption = true;
   } else{
    backgroundOption = false;

   }
   // Remove Active Class From All Spans
   document.querySelectorAll(".random-backgrounds span").forEach(element =>{
         element.classList.remove("active");
   });
   if (backgroundLocalItem === 'true') {
     document.querySelector(".random-backgrounds .yes").classList.add("active");
   }else{
    document.querySelector(".random-backgrounds .no").classList.add("active");

   }

 }
// ==============================  end Check If  There's Local Storage Color Option  ==========================
//========================================================================================================



 // ==============================   Click On Toggle Settings Gear ===========================================
//========================================================================================================

  document.querySelector(".toggle-settings .fa-gear").onclick = function() {

    // Toggle Class Fa-spin For Rotation On Self ====
  this.classList.toggle("fa-spin");
    // Toggle Class Open On Main Settings Box  ====
  document.querySelector(".settings-box").classList.toggle("open");
  };
// ============================== end   Click On Toggle Settings Gear ===========================================
//========================================================================================================



// ================================ Switch Colors =======================================================
//========================================================================================================

const colorsLi = document.querySelectorAll(".colors-list li");
     // Loop On All List Items    =====

colorsLi.forEach(li => {

    // Click On Every List Items =====

        li.addEventListener("click", (e) => {
//console.log(e.target.dataset.color);
// e = li //

// Set Color On Root ======

                document.documentElement.style.setProperty('--main--color',e.target.dataset.color);

// Set Color On Local Storage ======

                 localStorage.setItem("color-option" , e.target.dataset.color);

// Remove Active Class From All Children ====

                   //e.target.parentElement.querySelectorAll(".active").forEach(element =>{
                                       // element.classList.remove("active");
                                       handleActive(e);
                                            });

// Add Active Class On Self       ====

               //  e.target.classList.add("active");
                      //   });

});

// ================================ end Switch Colors =======================================================
//========================================================================================================



//================================ Switch Random background =======================================================
//========================================================================================================

const randomBackEl = document.querySelectorAll(".random-backgrounds span");
     // Loop On All spans    =====

     randomBackEl.forEach(span => {

    // Click On Every span =====

        span.addEventListener("click", (e) => {

// Remove Active Class From All Children ====

                   //e.target.parentElement.querySelectorAll(".active").forEach(element =>{
                                      //  element.classList.remove("active");
                                         //   });

// Add Active Class On Self       ====

                // e.target.classList.add("active");
                handleActive(e);

                 if(e.target.dataset.background === 'yes'){
                    
                     backgroundOption = true;
                     randomizeImgs();
                      localStorage.setItem("background_option", true);


                 }else{
                    backgroundOption = false;
                     clearInterval(backgroundInterval);
                     localStorage.setItem("background_option", false);

                 }
                         });

});

// ================================ end Switch Random background =======================================================
//========================================================================================================


// =================================== Select Landing Page Element =======================================
//========================================================================================================

let landingPage = document.querySelector(".landing-page");

           // Get array of imgs

let imagesArray = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","6.jpeg"];
    
     // Function to randomize Imgs
       function randomizeImgs(){
           if(backgroundOption === true){
            backgroundInterval = setInterval(()=>{

                // ==== // Get random number 
                  let randomNumber = Math.floor(Math.random() * imagesArray.length);
               //  ==== change background url images  =====
     
                 landingPage.style.backgroundImage = 'url("images/'+ imagesArray[randomNumber] +'")';
                         },1000);
           }
       }
       randomizeImgs();
    
// =================================== end Select Landing Page Element =======================================
//========================================================================================================

// =================================== Star Select Skills Selector =======================================
//========================================================================================================
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  // Skills offset Top
    let skillsOffsetTop = ourSkills.offsetTop;
    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;
    //  Window  Height
     let windowHeight = this.innerHeight;
    //  Window  ScrollTop
    let windowScrollTop = this.pageYOffset;
    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight) ){
      let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
      allSkills.forEach(skill => {
          skill.style.width = skill.dataset.progress;
      });
    }
};


// Create Poput with The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img =>{
     img.addEventListener('click',(e)=>{
        // Create Overlay Element
        let overlay = document.createElement("div");
        // Add Class To Overlay
        overlay.className = 'popup-overlay';
        // Append Overlay To The Body
        document.body.appendChild(overlay);
        // Create The Popup Box
        let popupBox = document.createElement("div");
        // Add Class To The Popup Box
        popupBox.className = 'popup-box';
        if(img.alt !== null){
          // Create Heading
          let imgHeading = document.createElement("h3");
          // Create text For Heading
          let imgText = document.createTextNode(img.alt);
          // Append The Text To The Heading
          imgHeading.appendChild(imgText);
          // Append The Heading To The Popup Box
          popupBox.appendChild(imgHeading);

        }

        // Create The Image
        let popupImage = document.createElement("img");
        // Set Image Source
        popupImage.src = img.src;
        // Add Image To Popup Box
        popupBox.appendChild(popupImage);
        // Append The Popup Box To Body
        document.body.appendChild(popupBox);
        // Create the Close Span
        let closeButton = document.createElement("span");
        // Create The close Button Text
        let closeButtonText = document.createTextNode("X");
        // Append Text to the close Button

        closeButton.appendChild(closeButtonText);
        // Add class to close Button
        closeButton.className =  'close-button';
        // Add close button to the popup Box
        popupBox.appendChild(closeButton);


     });
});
// Close Popup 
document.addEventListener("click",function(e){
if(e.target.className == 'close-button'){
// Remove the current popup
e.target.parentNode.remove();
// Remove overlay 
document.querySelector(".popup-overlay").remove();
}
});

// =================================== Star Bullets =======================================
//========================================================================================================

// Select All Bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

/*allBullets.forEach(bullet => {
     bullet.addEventListener("click",(e) => {
                  document.querySelector(e.target.dataset.section).scrollIntoView({
                          behavior:'smooth'
    });
  });
});*/

// =================================== End Bullets =======================================
//========================================================================================================
// Select All Bullets

const allLinks = document.querySelectorAll(".links a");

/*allLinks.forEach(link => {
  e.preventDefault();
     link.addEventListener("click",(e) => {
                  document.querySelector(e.target.dataset.section).scrollIntoView({
                          behavior:'smooth'
    });
  });
});*/
 function scrollToSomewhere(elements){
  elements.forEach(ele => {
    ele.addEventListener("click",(e) => {
      e.preventDefault();
                    document.querySelector(e.target.dataset.section).scrollIntoView({
                            behavior:'smooth'
      });
    });
  });
 }
 scrollToSomewhere(allBullets);
 scrollToSomewhere(allLinks);

 //Handle active state
 function handleActive(ev) {
  // Remove Active Class From All Children ====

  ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
                       element.classList.remove("active");
                           });

// Add Active Class On Self       ====

ev.target.classList.add("active");
        


 }

 let bulletsSpan = document.querySelectorAll(".bullets-option span");
 let bulletsContainer = document.querySelector(".nav-bullets");
 let bulletLocalItem = localStorage.getItem("bullets_option");
 if(bulletLocalItem !== null){
  bulletsSpan.forEach(span => {
span.classList.remove("active");
  });
  if(bulletLocalItem === 'block'){
    bulletsContainer.style.display = 'block';
    document.querySelector(".bullets-option .yes").classList.add("active");

  }else{
    bulletsContainer.style.display = 'none';
    document.querySelector(".bullets-option .no").classList.add("active");

  }
 }

 bulletsSpan.forEach(span =>{
     span.addEventListener("click", (e) =>{
       if(span.dataset.display === 'show'){

           bulletsContainer.style.display = 'block';
           localStorage.setItem("bullets_option" , 'block');
       } else{
           bulletsContainer.style.display = 'none';
           localStorage.setItem("bullets_option" , 'none');

       }
       handleActive(e);
     });
 });


 //Reset button
 document.querySelector(".rest-options").onclick = function (){
    //localStorage.clear();
    localStorage.removeItem("color-option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");
    //Reload window
    window.location.reload();

 };