<template>
  <div>
    <button @click="printTest">打印</button>
    <div>
      <el-table class="Btable" id="BtableA" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      form: {
        sendName: 'sendName',
        receiveName: 'receiveName',
        dateCode: 'dateCode',
        periodCode: 'periodCode'
      }
    }
  },
  methods: {
    printTest() {
      // 打开一个新的浏览器窗口
      var win = window.open('');
      // 写入
      win.document.write(`
        <html>
          <head>
            <title>交接单</title>
          </head>
          <style>
            .clearfix:after{
              content: "020"; 
              display: block; 
              height: 0; 
              clear: both; 
              visibility: hidden;  
            }
            .clearfix {
              zoom: 1; 
            }
            #detailePrintStyle{
              width:100%;
              height: 100%;
            }
            .printTitleSpan{
              width:100%;
              margin-bottom:10px;
            }
            .printTitleSpan .titleContent{
              float:left;
              margin-right:10px;
            }
            .printTitleSpan .contentStyle{
              min-width:100px;
              padding:0 5px;
              border-bottom:1px solid #ccc;
            }
            #detailePrintStyle #BtableA{
              border:none;
              margin-bottom:20px;
            }
            #detailePrintStyle #BtableA thead tbody{
              text-align:center;
              width:100%;
            }
            th{
              height:36px;
              line-height:36px;
            }
            tr{
              height:36px;
              line-height:36px;
            }
            .printThA1{
              width:200px;
            }
            .printThA2{
              width:170px;
            }
            .printThA3{
              width:400px;
            }
            input{
              border:none;
              text-align:center;
            }
            #detailePrintStyle .inputTxt{
              border-bottom: 1px solid #000;
            }
            .noPrint{
              display: none;
            }
          </style>
          <body>
            <div id="detailePrintStyle">
              <div class="printTitleSpan noPrint">
                <div class="clearfix" style="width:100%">
                  <div class="titleContent">交出人：</div><div class="titleContent contentStyle">`+this.form.sendName+`</div>
                  <div class="titleContent">接收人：</div><div class="titleContent contentStyle">`+this.form.receiveName+`</div>
                </div>
              <br>
              <div class="clearfix noPrint" style="width:100%">
                <div class="titleContent">交接时间：</div><div class="titleContent contentStyle">`+this.form.dateCode+`</div>
                <div class="titleContent">所属期间：</div><div class="titleContent contentStyle">`+this.form.periodCode+`</div>                 
              </div>
            </div>
          </body>  
        </html>
      `);
      // class='noPrint'
      // javascript部分
      var tableToPrintA = document.getElementById('BtableA')
      win.document.write(tableToPrintA.outerHTML);
      win.document.write('</div></body></html>');
      win.document.close();//在IE浏览器中使用必须添加这一句
      win.focus();//在IE浏览器中使用必须添加这一句
      win.print();
      win.close();
    }
  }
}
</script>
<style>

</style>

