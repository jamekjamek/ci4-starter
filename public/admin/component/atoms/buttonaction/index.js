var buttionaction = {
  btnLoading: ()=>{
    $('#btn-spinner').removeClass('d-none');
    $('#btn-submit').attr('disabled', true);
    $('#value-btn-submit').html('Mohon Tunggu...');
  },  
  btnDestroyLoading:()=>{
    $('#btn-spinner').addClass('d-none');
    $('#btn-submit').attr('disabled', false);
    $('#value-btn-submit').html('Simpan');
  }
}
export default buttionaction;