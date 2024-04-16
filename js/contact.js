async function handleFormspreeSubmit(e){e.preventDefault();var t=document.getElementById("contact-form"),n=new FormData(e.target);fetch(e.target.action,{method:t.method,body:n,headers:{Accept:"application/json"}}).then(e=>{e.ok?(contactAlert("success","Thanks for your submission!"),t.reset()):e.json().then(e=>{for(var t=e.errors,n=0;n<t.length;n++)contactAlert("danger",t[n].message)})}).catch(e=>{contactAlert("danger","Oops! There was a problem submitting your form")})}function contactAlert(e,t){var n=document.getElementById("contact-form-status"),r=`<div class="alert alert-${e} d-flex align-items-center" role="alert">
                     <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
                        <use xlink:href="#check-circle-fill" />
                    </svg>
                    <div>${t}</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>`;n.innerHTML=r,setTimeout(function(){n.innerHTML=""},3e3)}