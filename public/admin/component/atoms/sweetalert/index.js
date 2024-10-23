var sweetalert = {
  notif:(title,text,icon,href = null)=>{
    Swal.fire({
      title,
      text,
      icon,
    }).then((result) =>{
      if(result.isConfirmed === true || result.isDismissed === true){
        if(href){
          if(href === 'reload'){
            location.reload();
          }else{
            window.location.href = href;
          }
        }else{
          return;
        }
      };
    });
  },
  question:(title,text,icon,question)=>{
    Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      cancelButtonColor:'#d33',
      cancelButtonText:'Tidak jadi',
    }).then((question));
  }
}
export default sweetalert;