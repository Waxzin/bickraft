window.SimpleAnime=class{constructor(){this.items=document.querySelectorAll("[data-anime]"),this.init
()}animateItems(){this.items.forEach(t=>{const e=Number(t.getAttribute("data-anime"));isNaN(e)
||setTimeout(()=>{t.classList.add("anime")},e)})}handleVisibility
(){void 0!==document.visibilityState?"visible"===document.visibilityState&&this.animateItems():this.animateItems()}init()
{this.handleVisibility=this.handleVisibility.bind(this),this.handleVisibility
(),document.addEventListener("visibilitychange",this.handleVisibility)}}