//const { ipcRenderer } = require("electron");


//查询智能合约功能
function btcreatpriatenumber() {
  const createnumber = document.querySelector('#creatpriatenumber').value;

  var value = { createnumber };
  ipcRenderer.send('info:creatpriatenumber', value)

}

function reloadaddress() {
  ipcRenderer.send('info:accounts', null)
}

function changepage(pagename) {
  if (pagename == "jiaohu") {
    document.querySelector('#tabmanageprikey').style.display = 'none';
    document.querySelector('#tabjiaohu').style.display = 'block';
    document.querySelector('#highfunction').style.display = 'none';
    document.querySelector('#melodycheck').style.display = 'none';
  }
  else if(pagename == "manageprikey"){
    document.querySelector('#tabmanageprikey').style.display = 'block';
    document.querySelector('#tabjiaohu').style.display = 'none';
    document.querySelector('#highfunction').style.display = 'none';
    document.querySelector('#melodycheck').style.display = 'none';
  }
  else if(pagename == "highfunction")
  {
    document.querySelector('#tabmanageprikey').style.display = 'none';
    document.querySelector('#tabjiaohu').style.display = 'none';
    document.querySelector('#highfunction').style.display = 'block';
    document.querySelector('#melodycheck').style.display = 'none';
  }
  else if(pagename == "melody")
  {
    document.querySelector('#tabmanageprikey').style.display = 'none';
    document.querySelector('#tabjiaohu').style.display = 'none';
    document.querySelector('#highfunction').style.display = 'none';
    document.querySelector('#melodycheck').style.display = 'block';
  }
}

function importprikey() {
  ipcRenderer.send('info:importprikey', null)

}


function exportprikey() {
  ipcRenderer.send('info:exportprikey', null)

}

function getmaxprice(){
  ipcRenderer.send('info:getmaxgasprice', null)
}


function mytest()
{
  ipcRenderer.send('info:mytest', null)
}

function boxcheck()
{
  var tokenid = document.querySelector('#boxid').value;
  ipcRenderer.send('info:boxcheck',{tokenid})
}