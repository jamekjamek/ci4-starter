import { loadingModal,buttionaction,sweetalert } from "../../../component/index.js";

var ajax = {
  postdata:(url,method,data,href = null)=>{
    $.ajax({
      url: url,
      method: method,
      data: data,
      cache: data.type === 'not-form' ? true : false,
      contentType: data.type === 'not-form' ? 'application/x-www-form-urlencoded; charset=UTF-8' : false,
      processData: data.type === 'not-form'? true : false,
      beforeSend: function() {
        loadingModal.showModal();
        buttionaction.btnLoading();
      },
      success: function(res) {
        if(res.code === 200){
          sweetalert.notif('Sukses',res.message,'success',href);
        }
        if(res.code === 503 || res.code === 500){
          if(res.status === 'validation'){
            $.each(res.data, function(key, value) {
              console.log(key);
              console.log(value);
              if(value){
                $(`[name="${key}"]`).addClass('is-invalid');
                $(`[name="${key}"]`).parents('.form-validation').find('.invalid-feedback').html(value);
              }
            });
          }else{
            sweetalert.notif('Gagal',res.message,'error');
          }
        }
        buttionaction.btnDestroyLoading();
        loadingModal.destroyModal();
      }
    })
  },

  requestdata:(url,success)=>{
    $.ajax({
      url: url,
      beforeSend: function() {
        loadingModal.showModal();
      },
      success
    })
  },

  requestlogin:(url,method,data,success)=>{
    $.ajax({
      url: url,
      method: method,
      data: data,
      cache: data.type === 'not-form' ? true : false,
      contentType: data.type === 'not-form' ? 'application/x-www-form-urlencoded; charset=UTF-8' : false,
      processData: data.type === 'not-form'? true : false,
      beforeSend: function() {
        loadingModal.showModal();
      },
      success
    })
  },
}
export default ajax;