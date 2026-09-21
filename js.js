class Modal{
    constructor(modalId){
        this.modal = document.getElementById(modalId);
        this.closeBtn = this.modal.querySelector('.modal-close');
        this.init();
    }
open() {
    this.modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

close(){
    this.modal.classList.remove('is-open');
document.body.style.overflow = '';
}
init(){
    this.closeBtn.addEventListener("click",()=> this.close());
    this.modal.addEventListener('click', (event) => {
    if (event.target === this.modal) {
      this.close();
    }
    });
}
}

const myModalCopy = new Modal('myModal');
document.getElementById('open-btn').addEventListener("click", () => { 
    myModalCopy.open(); 
});