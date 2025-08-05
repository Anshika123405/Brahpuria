let mode = "light";
const modechange = document.querySelector(".modechange");
const modeoffon = document.querySelector("body");
modechange.onclick = (e) =>{
  if (mode === "light") {
    modeoffon.style.backgroundColor = "black";
    mode = "dark";
  } else {
    modeoffon.style.backgroundColor = "white";
    mode = "light";
  }
};

const box = document.querySelectorAll(".c1");
const boxchild = document.querySelectorAll(".c2");
const boxchild2 = document.querySelectorAll(".i1");
let c2;
let i1;
let c3;
let data;
let data2;
let i2;

 box.forEach((c1,index)=>{
       c1.addEventListener("click",()=>{
         if(!c2){
          i1=boxchild2[index];
          c2 = boxchild[index];
          firstData = boxchild2[index].getAttribute("name");
          c2.style.transform = "rotateY(360deg)";
          c2.style.transition = "2s";
          console.log("First Box Selected, Data:", firstData);
    
          
         } else if (!c3) {
          i2=boxchild2[index];
          // Second selection
          c3 = boxchild[index];
          secondData = boxchild2[index].getAttribute("name");
    
          c3.style.transform = "rotateY(360deg)";
          c3.style.transition = "2s";
          console.log("Second Box Selected, Data:", secondData);
    
         
          if (firstData === secondData) {
            console.log("Matching data detected:", firstData, secondData);
            handleMatchingBoxes(c1, c2, c3);
    
          } else {
            console.log("Non-matching data detected:", firstData, secondData);
            handleNonMatchingBoxes(c2, c3);
          }
    
          // Reset variables for next click
          c2 = null;
          c3 = null;
          firstData = null;
          secondData = null;
    
        } else {
          console.log("Both boxes selected. Reset before continuing.");
        }
        function handleMatchingBoxes(c1, c2, c3) {
          c1.addEventListener("mouseleave", () => {
             c2.style.pointerEvents = "none";
             c3.style.pointerEvents = "none";
        
            c1.style.backgroundColor = "pink";
            c1.style.pointerEvents = "none";
          });
        }
        
        // Function to handle non-matching boxes
        function handleNonMatchingBoxes(c2, c3) {
          c1.addEventListener("mouseleave", () => {
            c2.style.transform = "rotateY(180deg)";
            c2.style.transition = "2s";
            c3.style.transform = "rotateY(180deg)";
            c3.style.transition = "2s";
            c2 = null;
          c3 = null;
          firstData = null;
          secondData = null;
            

          });
        
          
        }
        
    
       });
 });