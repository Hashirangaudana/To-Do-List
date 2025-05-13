var el;
// TO-Do_list
// Every Day What We Do
function sub() {
  //console.log("111");
  var s1;
  var itm = litm.value;
  //console.log(itm);

  if (itm != "") {
    //console.log("111");

    t1 = document.createTextNode(itm);

    del = document.createElement("input");
    edt = document.createElement("input");

    del.setAttribute("type", "button");
    del.setAttribute("value", "Delete");
    del.addEventListener("click", function () {
      tbl.removeChild(this.parentNode.parentNode);
    });

    edt.setAttribute("type", "button");
    edt.setAttribute("value", "Edit");
    edt.addEventListener("click", function () {
      btnOK.style.display = "inline";
      el = this.parentNode.parentNode;
      litm.value = el.firstChild.innerHTML;
    });

    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");

    td1.appendChild(t1);
    td2.appendChild(del);
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

//console.log((a.parentNode).parentNode);

//     tbl.removeChild((a.parentNode).parentNode);

// }

function edit(b) {
  btnOK.style.display = "inline";

  //console.log((b.parentNode).parentNode);

  el = b.parentNode.parentNode;

  //console.log(el.firstChild);

  litm.value = el.firstChild.innerHTML;
}

function okbtn() {
  el.firstChild.innerHTML = litm.value;

  litm.value = "";

  btnOK.style.display = "none";
}
