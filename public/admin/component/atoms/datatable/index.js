var datatable = {
  data:(table, url, seacrh)=>{
    return table.DataTable({
      "processing"  : true, 
      "serverSide"  : true, 
      "searching"   : true,
      "paging"      : true,
      "destroy"     : true,
      "order"       : [
          [1, 'desc']
      ],
      "dom": "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
      "buttons": [{
          "extend": "excel",
          "className": "btn btn-sm btn-success"
        }, {
          "extend": "pdf",
          "className": "btn btn-sm btn-danger"
      }],
      "lengthMenu"  : [
        [10, 25, 50, - 1],
        [10, 25, 50, 'All']
      ],
      "ajax"        : {
        "url"       : `${url}`,
        "type"      : "POST"
      },
      "columnDefs"    : [{
        "targets"     : 0,
        "checkboxes"  : {
          "selectRow" : true
        }
      }],
      "select"        : {
        "style"       : "multi"
      },
      
      "language"      : {
        "search"      : `${seacrh}`,
        "processing"  : "Mohon Tunggu ...",
        "emptyTable"  : 'Belum Ada Data'
      } 
    });
  },
}
export default datatable;