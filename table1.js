var data1 = [
    {
        number:1,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    },
    {
        number:2,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    }
    , {
        number:3,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    }
    , {
        number:1,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    },
    {
        number:1,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    },
    {
        number:1,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"2019-09-21 23:22:22",
        ci:'早班',
        zs:'1211',
        gl:'1211'
    }
]
// 创建表格
function creat(){
    
    var table = document.getElementsByClassName("table")[0];
    var rowNum=table.rows.length;
    for (i=1;i<rowNum;i++) 
    {
        table.deleteRow(i);
        rowNum=rowNum-1;
        i=i-1;
    }
    var tr,td;
    for(var i = 0;i< datanum;i++){
        tr = table.insertRow(table.rows.length);
      Object.keys(data[i]).forEach(function(key){
          td = tr.insertCell(tr.cells.length);
           var inp = document.createElement("input");
           inp.value = data[i][key];
           td.appendChild(inp)
      })
    }
    
    var tr1,td1;
    var zpj = 0;
    var gpj =0;
    for(var x=0;x< datanum;x++){
       
       zpj = zpj +  parseInt( data[x].zs);
       gpj = gpj +  parseInt( data[x].gl);
    }
    zpj = zpj/data.length;
    gpj = gpj/data.length;
    tr1 = table.insertRow(table.rows.length);
    Object.keys(data[0]).forEach(function(key){
       
        td1 = tr1.insertCell(tr1.cells.length);
        console.log(key)
        if(key == 'zs'){
            td1.innerHTML = zpj;
          
        }else if(key == 'gl'){
            td1.innerHTML = gpj;
        }else{
            td1.innerHTML = '/';
        }
        
    })
}
creat();
$(".jian").click(function () {
    let a = $(".num")[0].innerHTML;
    let b = parseInt(a);
    if(b>= 2){
        console.log($(".num")[0].innerHTML)
        $(".num")[0].innerHTML = --b;
        let g = JSON.stringify(data1);
        let f = JSON.parse(g);
        if(b == 1){
            data = f.splice(0,6);
            datanum = 6;
        }else{
            let i = b-1;
            data=f.splice(i*6,6);
           datanum = data.length;
        }
        creat();
        // data = data1.splice(b*6,6);
    }
   
})
$(".jia").click(function () {
    let d = Math.ceil(data1.length/6);
    let a = $(".num")[0].innerHTML;
    let b = parseInt(a);
    if(b<d){
       
        console.log($(".num")[0].innerHTML)
        $(".num")[0].innerHTML = ++b;
        console.log(data1);
        let g = JSON.stringify(data1);
        let f = JSON.parse(g);
        if(b == 1){
            data = f.splice(0,6);
        }else{
            let i = b-1;
            data=f.splice(i*6,6);
           datanum = data.length;
        }
       
        console.log(data);

        creat();
    }
   
    
})
function csv2sheet(csv) {
    var sheet = {}; // 将要生成的sheet
    csv = csv.split('\n');
    csv.forEach(function(row, i) {
        row = row.split(',');
        if(i == 0) sheet['!ref'] = 'A1:'+String.fromCharCode(65+row.length-1)+(csv.length-1);
        row.forEach(function(col, j) {
            sheet[String.fromCharCode(65+j)+(i+1)] = {v: col};
        });
    });
    return sheet;
}
function sheet2blob(sheet, sheetName) {
    sheetName = sheetName || 'sheet1';
    var workbook = {
        SheetNames: [sheetName],
        Sheets: {}
    };
    workbook.Sheets[sheetName] = sheet;
    // 生成excel的配置项
    var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
    };
    var wbout = XLSX.write(workbook, wopts);
    var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
    // 字符串转ArrayBuffer
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    return blob;
}
function openDownloadDialog(url, saveName)
{
    if(typeof url == 'object' && url instanceof Blob)
    {
        url = URL.createObjectURL(url); // 创建blob地址
    }
    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    var event;
    if(window.MouseEvent) event = new MouseEvent('click');
    else
    {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
}
;
var d = 0;
var dzs = 0;
var dgl = 0;
for(d in data1){

  dzs = dzs + parseInt(data1[d].zs);
  dgl = dgl + parseInt(data1[d].gl);
}
dzs = dzs/data1.length;
dgl = dgl/data1.length;
var arr = [];
$(".export").click(function(){
    arr = [];
    for(let i in data1){
        var c = [];
        Object.keys(data1[i]).forEach(function(key){
          c.push(data1[i][key])
        })
                 c.unshift(null);
                 c.unshift(null);
        arr.push(c);
     
    }
    arr.unshift([null,null,"序号","时间","班次","转速","功率"]);
    arr.push(['平均',null,"/","/","/",dzs,dgl])
   
    var b1 = 0;
    for(b1 in arr){
            if(b1 == 0){
                arr[b1].push(null,null,"2019-09-21 23:22:22");
            }else{
                arr[b1].push(null,null,null);
            }
        
            
        
    }
    console.log(arr)
    var sheet = XLSX.utils.aoa_to_sheet(arr);
    openDownloadDialog(sheet2blob(sheet), '单元格合并示例.xlsx');
})


// sheet['!merges'] = [
//     // 设置A1-C1的单元格合并
//     {s: {r: 0, c: 0}, e: {r: 0, c: 2}}
// ]