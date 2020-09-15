document.getElementById("btn1").addEventListener("click",function()
    {
        document.getElementById("content").style.display="block";
        document.getElementById("content2").style.display="none";
        document.getElementById("content3").style.display="none";
    })
document.getElementById("btn2").addEventListener("click",function()
    {
        document.getElementById("content").style.display="none";
        document.getElementById("content2").style.display="block";
        document.getElementById("content3").style.display="none";
    })
document.getElementById("btn3").addEventListener("click",function()
    {
        document.getElementById("content").style.display="none";
        document.getElementById("content2").style.display="none";
        document.getElementById("content3").style.display="block";
    })
    
          
          function checkEmail(str1)
          {
               var posat=str1.indexOf("@");
               var posdot=str1.indexOf(".");
          
          if(posat!=-1 && posdot!=-1)
          {
              if(posat>=1 && (posdot-posat)>=2 && (str1.length-1-posdot)>=2 && (str1.length-1-posdot)<=5)
              {
                  return true;
              }
              else
              {
                  return false;
              }
          }
          else
          {
              return false;
          }
          }

          function validateForm(){

               var nam=document.myform.Name.value;
               var email2=document.myform.Email.value;
               var mobnum=document.myform.Mobile_no.value;
               var age2=document.myform.Age.value;
               var gen2=document.myform.Gender.value;
               var dan2=document.myform.Performance.value;
               var nom2=document.myform.No_of_members.value;
               var dtype2=document.myform.Type.value;
               var comment2=document.myform.Comment.value;
               var agree2=document.myform.agree.checked;
               if (nam=="" || nam==null)
               {
                  document.getElementById("nam1").innerHTML="Name should not be null";
                  return false;
               }
               else if(nam.length<3)
               {
                  document.getElementById("nam1").innerHTML="Name length should be 3-30";
                  return false;
               }
               else if(nam.length>30)
               {
                  document.getElementById("nam1").innerHTML="Name length should be 3-30";
                  return false;
               }
               else if(isNaN(nam)==false)
               {
                  document.getElementById("nam1").innerHTML="Name should not be a numeric";
                  return false;
               }
               else if(email2=="" || email2==null)
               {
                  document.getElementById("emal").innerHTML="Email cannot be empty";
                  return false;
               }
               else if(!checkEmail(email2))
               {
                  document.getElementById("emal").innerHTML="Email not valid";
                  
               }
               else if (mobnum=="" || mobnum==null)
               {
                  document.getElementById("mno").innerHTML="Mobile no cannot be null";
                  return false;
               }
               else if(mobnum.length!=10)
               {
                  document.getElementById("mno").innerHTML="Please enter a 10 digit no";
                  return false;
               }
               else if(mobnum[0]<'6')
               {
                  document.getElementById("mno").innerHTML="Enter a valid mobile no";
                  return false;
               }
               else if(age2=="" || age2==null)
               {
                  document.getElementById("age1").innerHTML="Age cannot be null";
                  return false;
               }
               else if(age2<=10)
               {
                  document.getElementById("age1").innerHTML="Age should be 10-50";
                  return false;
               }
               else if(age2>=50)
               {
                  document.getElementById("age1").innerHTML="Age should be 10-50";
                  return false;
               }
               else if(gen2=="" || gen2==null)
               {
                  document.getElementById("gen1").innerHTML="Select one of them";
                  return false;
               }
               else if(dan2=="" || dan2==null)
               {
                  document.getElementById("dan1").innerHTML="Select one of them";
                  return false;
               }
               else if(nom2>=14)
               {
                  document.getElementById("nom1").innerHTML="Members should be 1-14";
                  return false;
               }
               else if(dtype2=="" || dtype2==null)
               {
                  document.getElementById("dtype1").innerHTML="Select one of them";
                  return false;
               }
               else if(comment2.length>220)
               {
                  document.getElementById("comment1").innerHTML="comment cannot be greater than 220 characters";
                  return false;
               }
               else if(agree2==false)
               {
                 document.getElementById("agree1").innerHTML="Please accept terms and conditions";
                 return false;
               }
               else
               {
                  alert("successfully registered");
                  return true;
               }
          }

          $(document).ready(function () {

            $.getJSON("data.json", function(data){
                var participants = '';

                $.each(data, function(key, value) {
                  participants += '<tr>';
                  participants += '<td>' +
                        value.Name + '</td>';
                    
                        participants += '<td>' +
                        value.Email + '</td>';

                        participants += '<td>' +
                        value.Mobile_no + '</td>';
                     
                        participants += '<td>' +
                        value.Age + '</td>';
                        
                        participants += '<td>' +
                        value.Gender + '</td>';

                        participants += '<td>' +
                        value.Performance + '</td>';

                        participants += '<td>' +
                        value.No_of_members + '</td>';

                        participants += '<td>' +
                        value.Type + '</td>';

                        participants += '<td>' +
                        value.Comment + '</td>';

                        participants += '<td>' +
                        value.TimeStamp + '</td>';

                        participants += '</tr>';


                });

                $('#t1').append(registrant);
            });

        });