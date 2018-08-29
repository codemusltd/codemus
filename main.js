if(!window.hcb_user){
    hcb_user={};
} 
(
    function(){
        const s=document.createElement("script"), 
            l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), 
            h="//www.htmlcommentbox.com";
            
            s.setAttribute("type","text/javascript");
            s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l)
            .replace("+","%2B")+"&mod=%241%24wq1rdBcg%24fhPona6NlQE18Eo1nftNn0"+"&opts=16862&num=10&ts=1535148859435");
            if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);
    }
)(); 

// modal control

function modalOn(){
    document.getElementById('contact').style.display='block';
    document.getElementById('HCB_comment_box').style.visibility='hidden';
    document.getElementById('gmap').style.visibility='hidden';
}
  
function modalOff(){
    document.getElementById('contact').style.display='none';
    document.getElementById('HCB_comment_box').style.visibility='visible';
    document.getElementById('gmap').style.visibility='visible';
}
  