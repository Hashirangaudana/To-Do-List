var el;

function sub() {
  //console.log("111");

  var itm = litm.value;
  //console.log(itm);

  if (itm != "") {
    //console.log("111");

    t1 = document.createTextNode(itm);

    chk = document.createElement("input");
    edt = document.createElement("input");

    chk.setAttribute("type", "checkbox");
    chk.addEventListener("click", function () {
      var x = this.parentNode;
      //console.log(x);
      //console.log(x.parentNode);

      var y = x.parentNode.firstChild;
      //console.log(y);
      //console.log(y.innerHTML);

      z = document.createTextNode(y.innerHTML);

      del = document.createElement("input");
      del.setAttribute("type", "button");
      del.setAttribute("value", "delete");
      del.addEventListener("click", function () {
        tbl2.removeChild(this.parentNode.parentNode);
        console.log(tbl2.innerHTML);

        var tblnode2 = tbl2.innerHTML;
        console.log(tblnode2);

         if(tblnode2 == ""){
             console.log("111");
             dltbtn2.style.display = "none";
             return;
         }
      });

      td4 = document.createElement("td");
      td5 = document.createElement("td");

      td4.appendChild(z);
      td5.appendChild(del);

      tr2 = document.createElement("tr");

      tr2.appendChild(td4);
      tr2.appendChild(td5);

      tbl2.appendChild(tr2);

      tbl.removeChild(x.parentNode);

      dltbtn2.style.display = "block";
    });

    edt.setAttribute("type", "button");
    edt.setAttribute("value", "Edit");
    edt.addEventListener("click", function () {
      sbbtn.style.display = "none";
      btnOK.style.display = "inline";
      el = this.parentNode.parentNode;
      litm.value = el.firstChild.innerHTML;
    });

    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");

    td1.appendChild(t1);
    td2.appendChild(chk);
    td3.appendChild(edt);

    tr = document.createElement("tr");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbl.appendChild(tr);

    litm.value = "";
  }
}

// function dlt(a){

//     //console.log((a.parentNode).parentNode);

//     tbl.removeChild((a.parentNode).parentNode);

// }

// function edit(b){

//     btnOK.style.display = "inline";

//     //console.log((b.parentNode).parentNode);

//     el = (b.parentNode).parentNode;

//     //console.log(el.firstChild);

//     litm.value = (el.firstChild).innerHTML;

// }

function okbtn() {
  el.firstChild.innerHTML = litm.value;

  litm.value = "";

  btnOK.style.display = "none";
  sbbtn.style.display = "inline";
}

function dltAll() {
  //console.log("111");

  tbl2.innerHTML = "";

  dltbtn2.style.display = "none";
}