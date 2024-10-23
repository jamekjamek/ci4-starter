var loadingModal = {
  showModal: (text = 'Mohon Tunggu Sebentar...') => {
    $('body').loadingModal({
      text: text
    })
    .loadingModal('animation', 'wave')
    .loadingModal('backgroundColor', 'red');
  },
  destroyModal: () => {
    $('body').loadingModal('destroy');
  }
}

export default loadingModal;
