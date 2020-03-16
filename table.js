var data1 = [
    {
        number:1,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    },
    {
        number:2,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    }
    , {
        number:3,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    }
    , {
        number:1,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    },
    {
        number:1,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    },
    {
        number:1,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"1",
        
        zs:'1411',
        gl:'1411'
    },
    {
        number:8,
        time:"1",
        
        zs:'1211',
        gl:'1211'
    }
]
var s = JSON.stringify(data1);
var s1 = JSON.parse(s);
var data = s1.splice(0,6);
var datanum;
if(data1.length<=6){
    datanum = data1.length;
}else{
   datanum = 6;
}
function creat(){
    
    var table = document.getElementsByClassName("table")[0];
    var table2 = document.getElementsByClassName("table2")[0];
    var rowNum=table.rows.length;
    for (i=1;i<rowNum;i++) 
    {
        table.deleteRow(i);
        rowNum=rowNum-1;
        i=i-1;
    }
    var tr,td;
    for(var i = 0;i< data1.length;i++){
        tr = table.insertRow(table.rows.length);
      Object.keys(data1[i]).forEach(function(key){
          td = tr.insertCell(tr.cells.length);
           td.innerHTML = data1[i][key];
      })
    }
    
    var tr1,td1;
    var zpj = 0;
    var gpj =0;
    for(var x=0;x<data1.length;x++){
       
       zpj = zpj +  parseInt( data1[x].zs);
       gpj = gpj +  parseInt( data1[x].gl);
    }
    table2.querySelectorAll("td")[1].innerHTML = zpj;
    table2.querySelectorAll("td")[2].innerHTML = gpj;
}

var sad;
function pre(){
    $('.tip').show();
    $('.cover').show();
}
function no(){
    $('.tip').hide();
    $('.cover').hide();
}
function yes(){
    $('.tip').hide();
    $('.cover').hide();
}
function no1(){
    $('.tip1').hide();
    $('.cover').hide();
}
function yes1(){
    var table2 = document.getElementsByClassName("table2")[0];
    $('.tip1').hide();
    $('.cover').hide();
    $('.table').find("tr").eq(aa).find("td").eq(bb)[0].innerHTML = $('#inp').val();  
    if(bb == 2){
     data1[aa].zs = $('#inp').val()
     var zpj = 0;
     var gpj = 0;
     for(var x=0;x<data1.length;x++){
       
        zpj = zpj +  parseInt( data1[x].zs);
        gpj = gpj +  parseInt( data1[x].gl);
     }
     table2.querySelectorAll("td")[1].innerHTML = zpj;
     table2.querySelectorAll("td")[2].innerHTML = gpj;
    }else if(bb = 3){
  data1[aa].zs = $('#inp').val()
  var zpj = 0;
  var gpj = 0;
  for(var x=0;x<data1.length;x++){
    
     zpj = zpj +  parseInt( data1[x].zs);
     gpj = gpj +  parseInt( data1[x].gl);
  }
  table2.querySelectorAll("td")[1].innerHTML = zpj;
  table2.querySelectorAll("td")[2].innerHTML = gpj;
    }
     
}
creat();
var aa;
var bb;
$('.tip').hide();
$('.cover').hide();
$('.table').find('td').click(function(){
    $('.tip1').show();
    $('.cover').show();
    // $("#inp").attr("value",$(this)[0].innerHTML);
    document.getElementById('inp').value = $(this)[0].innerHTML;
     aa = $(this).parent().index();
     bb = $(this).index();

  
    console.log("dasdasd")
})
console.log($('.table').find('td'))
function back4(){
    $('.content2').show();
    $('.content4').hide();
}
function back3(){
    $('.content2').show();
    $('.content3').hide();
}
function back2(){
    $('.content1').show();
    $('.content2').hide();
}
function design(){
    $('.content2').show();
    $('.content1').hide();
}
function look1(){
    $('.content4').show();
    $('.content2').hide();
    document.getElementById('#ip2').focus();
    window.addEventListener('resize', () => {
        const activeElement = document.activeElement
        if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
            setTimeout(() => {
              activeElement.scrollIntoView()
            }, 100)
          }
    })



    console.log("sad")
}
function look(){
    $('.content3').show();
    $('.content2').hide();
    document.getElementById('#ip1').focus();
    window.addEventListener('resize', () => {
        const activeElement = document.activeElement
        if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
            setTimeout(() => {
              activeElement.scrollIntoView()
            }, 100)
          }
    })


}

