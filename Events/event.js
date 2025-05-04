// document.getElementById('food').onclick = function(){
//     alert('food')
// }


document.getElementById('food').addEventListener('click', function(e) {
    // alert('first food')
    console.log(e);
    
})

// //type, timestamp, defaultprevented, target, , srcElement
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("inside ul clickes");
    
// }, false)

// document.getElementById('food').addEventListener('click', function(e){

//     //if don't want to make it public use it stopPropagation and default
//     e.preventDefault();
//     e.stopPropagation(); 

//     console.log('first images clicked');
// }, false)


//remove images from the container 
document.querySelector('#images').addEventListener('click', function(e){

    // const rem = e.target.remove();
    // const rem = e. target;
    // console.log(rem.remove());
    

    //by selecting parentNode
    // console.log(e.target.parentNode);

    // let removeIt = e.target.parentNode;
    // removeIt.remove();


    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    
}, false)
