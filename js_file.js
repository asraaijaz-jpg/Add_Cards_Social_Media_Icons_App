var contactCardHtml = "";
$(document).ready(function () {
  sessionStorage.removeItem('mydata');
  sessionStorage.removeItem('ContactCard');
  sessionStorage.removeItem('ID');
});

//   ///////////////////////////////////// first function //////////////////////////////////////////////

function getId(btn) {
 
  const idvalue = btn.id;
  var srcvalue = document.getElementById(idvalue + '1').src;

  document.getElementById('heading').innerText = idvalue;
  document.getElementById('placeimage').src = srcvalue;

}

// ////////////////////////////////////////////// second function //////////////////////////////////////////////////////

function SaveData() {

  if (document.getElementById('Ivalue').value !== '') {
    var arr = [{
      id:'',
      image:'',
      LinkText:''
    }];
    if (sessionStorage.getItem('mydata') != null && sessionStorage.getItem('mydata') != undefined) {
      arr = JSON.parse(sessionStorage.getItem('mydata'));
    }

    const idvalue = document.getElementById('heading').innerText;
    var srcvalue = document.getElementById('placeimage').src;
    var LinkText = document.getElementById('Ivalue').value;
    
var k=0;
    for(var j=0; j<arr.length; j++)
    {
      if(arr[j].id == idvalue)
      {
        alert('Similar value not added again');
        k++;
      }
   }
   if(k==0)
   {
   arr.push({ 'id': idvalue, 'image': srcvalue, 'LinkText': LinkText });
   }
    sessionStorage.setItem('mydata', JSON.stringify(arr));

    var html = "";
    html = contactCardHtml;
    for (var i = 0; i < arr.length; i++) {

      var idval = arr[i].id;

      html += '<img id="placeimage1" data-toggle="modal" data-target="#exampleModal4" class=' + idval + ' src=' + arr[i].image + ' onclick="editlink(this)" />';
      html += '<a href="" style="color:black"><i class="fa fa-pencil pencilicon" ></i></a> <br></br><h5 class="incsize">' + arr[i].id + "</h5>"
    }
    document.getElementById('Links').innerHTML = html;

    var getdata = document.getElementById('Ivalue').value;
    document.getElementById('Ivalue').value = '';
  }
  else {
    alert("Please fill up the link text");
  }
}

////////////////////////////////////////////   Third Function  ////////////////////////////////////////////////

function editlink(val1) {
  var Id = val1.className;
  if (Id != "Contact_page") {
    var obj = JSON.parse(sessionStorage.getItem('mydata')).find(x => x.id == Id)
    var LinkText = obj.LinkText;
    var ImageSrc = obj.image;
    var Id = obj.id;
    document.getElementById('linktext').value = LinkText;
    document.getElementById('placeimageicon').src = ImageSrc;
    document.getElementById('id1').innerHTML = Id;
  }
  else {
    var obj = JSON.parse(sessionStorage.getItem('ContactCard')).find(x => x.Id == Id)
    document.getElementById('txtName1').value = obj.Name;
    document.getElementById('txtNumber1').value = obj.Numbers;
    document.getElementById('txtEmail1').value = obj.Email;
    document.getElementById('txtWebsiteName1').value = obj.WebsiteName;
    document.getElementById('txtCompanyName1').value = obj.CompanyName;
    document.getElementById('txtBioData1').value = obj.BioData;

  }
}

////////////////////////////////////// // Fourth function  //////////////////////////////////////////


function OnSaveEditModal() {

  var LinkText = document.getElementById('linktext').value;
  var Id = document.getElementById('id1').innerHTML;

  var arr = JSON.parse(sessionStorage.getItem('mydata'));
  var objIndex = arr.findIndex(a => a.id == Id);
  alert(objIndex);
  arr[objIndex].LinkText = LinkText;
  sessionStorage.setItem('mydata', JSON.stringify(arr));


}

// ////////////////////////////////////// Fifth function //////////////////////////////////////

function SaveContactCardData() {

  if (document.getElementById('txtName').value !== '') {
    var arr = [];
    if (sessionStorage.getItem('ContactCard') != null && sessionStorage.getItem('ContactCard') != undefined) {
      arr = JSON.parse(sessionStorage.getItem('ContactCard'));
    }

    const Idvalue = document.getElementById('heading').innerText;
    const Image = document.getElementById('placeimage').src;
    var Name = document.getElementById('txtName').value;
    var Email = document.getElementById('txtEmail').value;
    var Numbers = document.getElementById('txtNumber').value;
    var WebsiteName = document.getElementById('txtWebsiteName').value;
    var CompanyName = document.getElementById('txtCompanyName').value;
    var BioData = document.getElementById('txtBioData').value;

    var k=0;
    for(var j=0; j<arr.length; j++)
    {
      if(arr[j].id == idvalue)
      {
        alert('Similar value not added again');
        k++;
      }
   }
   if(k==0)
   {
    arr.push({ 'Id': Idvalue, 'Image': Image, 'Name': Name, 'Email': Email, 'Numbers': Numbers, 'WebsiteName': WebsiteName, 'CompanyName': CompanyName, 'BioData': BioData });

   }

    // arr.push({ 'Id': Idvalue, 'Image': Image, 'Name': Name, 'Email': Email, 'Numbers': Numbers, 'WebsiteName': WebsiteName, 'CompanyName': CompanyName, 'BioData': BioData });

    sessionStorage.setItem('ContactCard', JSON.stringify(arr));




    var PreviousHtml = document.getElementById('Links').innerHTML;
    contactCardHtml += '<img id="placeimage1" data-toggle="modal" data-target="#exampleModal5" class=' + Idvalue + ' src=' + Image + ' onclick="editlink(this)" />';
    contactCardHtml += '<a href="" style="color:black"><i class="fa fa-pencil pencilicon" ></i></a> <br></br><h5 class="incsize">' + Idvalue + "</h5>"
    var FinalHtml = PreviousHtml + contactCardHtml;
    document.getElementById('Links').innerHTML = FinalHtml;

  }
  else {
    alert("Please fill up the fields");
  }
}

//////////////////////////////////////// // Sixth function   /////////////////////////////////

function SaveContactOnEdit() {

  // var Id=document.getElementById('id1').innerHTML;
  var obj = JSON.parse(sessionStorage.getItem('ContactCard')).find(x => x.Id == 'Contact_page');
  obj.Name = document.getElementById('txtName1').value;

  obj.Number = document.getElementById('txtNumber1').value;
  obj.Email = document.getElementById('txtEmail1').value;
  obj.WebSite = document.getElementById('txtWebsiteName1').value;
  obj.CompanyName = document.getElementById('txtCompanyName1').value;
  obj.BioData = document.getElementById('txtBioData1').value;

  sessionStorage.setItem('ContactCard', JSON.stringify(obj));
}
