var el;
//const audio = new Audio('sound.mp3');

function addItem() {
  //console.log("111");

  var itm = litm.value;
  //console.log(itm);

  if (itm != "") {
    //console.log("111");
    if (isNaN(itm)) {
      t1 = document.createTextNode(itm);

      chk = document.createElement("input");
      edt = document.createElement("input");

      chk.setAttribute("type", "checkbox");
      chk.setAttribute("class", "checkbox");
      chk.addEventListener("click", function () {
        var confirmNO4 = window.confirm(
          "Are sure , You want to COMPLETE your Task ? :-  " +
            this.parentNode.nextSibling.innerHTML
        );

        var z = "";
        if (confirmNO4) {
          var x = this.parentNode;
          //console.log(x);
          //console.log(x.parentNode);

          var y = x.nextSibling;
          //console.log(y);
          //console.log(y.innerHTML);

          z = document.createTextNode(y.innerHTML);

          //edt = document.createElement("input");

          del = document.createElement("input");
          del.setAttribute("type", "button");
          del.setAttribute("value", "delete");
          del.setAttribute("class", "delete");
          del.addEventListener("click", function () {
            var confirmNO2 = window.confirm(
              "Are sure , You want to DELETE your Task ? :-  " +
                this.parentNode.parentNode.firstChild.innerHTML
            );
            if (confirmNO2) {
              tbl2.removeChild(this.parentNode.parentNode);
              //console.log(tbl2.innerHTML);

              var tblnode2 = tbl2.innerHTML;
              //console.log(tblnode2);

              if (tblnode2 == "") {
                //console.log("111");

                dltbtn2.style.display = "none";
              }
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
        }
      });

      edt.setAttribute("type", "button");
      edt.setAttribute("value", "Edit");
      edt.setAttribute("class", "edit");
      edt.addEventListener("click", function () {
        if (litm.value == "") {
          el = this.parentNode.parentNode;
          if (
            window.confirm(
              el.firstChild.nextSibling.innerHTML +
                "\n Are you sure you want to edit this?"
            )
          ) {
            sbbtn.style.display = "none";
            btnOK.style.display = "inline";

            litm.value = el.firstChild.nextSibling.innerHTML;
          }
        } else {
          window.alert("There is a task that hasn't been entered yet");
        }
      });

      td1 = document.createElement("td");
      td2 = document.createElement("td");
      td3 = document.createElement("td");

      td1.appendChild(chk);
      td2.appendChild(t1);
      td3.appendChild(edt);

      tr = document.createElement("tr");

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      tbl.appendChild(tr);

      litm.value = "";
    } else {
      window.alert("Please don't add NUMBERS!");
    }
  } else {
    window.alert("Add your Task first!!");
  }
}

function editDoneItem() {
  if (
    window.confirm(
      "Are you sure , You want to CHANGHE  your  Task ( " +
        el.firstChild.nextSibling.innerHTML +
        " ) to  ( " +
        litm.value +
        " ) ! "
    )
  ) {
    el.firstChild.nextSibling.innerHTML = litm.value;

    litm.value = "";

    btnOK.style.display = "none";
    sbbtn.style.display = "inline";
  }
}

function dltAllItem() {
  if (window.confirm("Are you sure you want to delete everything?")) {
    //console.log("111");

    tbl2.innerHTML = "";

    dltbtn2.style.display = "none";
  }
}
