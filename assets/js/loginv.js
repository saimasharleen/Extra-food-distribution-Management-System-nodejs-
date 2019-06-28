"use strict"
$(function() {
         $("#uname_error_message").hide();
         $("#pass_error_message").hide();
         var error_uname = false;
         var error_pass = false;
         $("#form_uname").focusout(function(){
            check_uname();
         });
         $("#pass").focusout(function() {
            check_password();
         });
         function check_uname() {
            var pattern = /^[A-Za-z0-9_]{5,15}$/;
            var uname = $("#form_uname").val();
            if (pattern.test(uname) && uname !== '') {
               $("#uname_error_message").hide();
               $("#form_uname").css("border-bottom","2px solid #34F458");
            } else {
               $("#uname_error_message").html("Should contain five Characters(number,_,characters only!)");
               $("#uname_error_message").show();
               $("#form_uname").css("border-bottom","2px solid #F90A0A");
               error_uname = true;
            }
         }
         
            
         
         function check_password() {
            var pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
            var password = $("#pass").val()
            if (pattern.test(password) && password !== '') {
               $("#pass_error_message").hide();
               $("#pass").css("border-bottom","2px solid #34F458");
            } else {
               $("#pass_error_message").html("Should Contain UpperCase, LowerCase, Number/SpecialChar and min 8 Chars");
               $("#pass_error_message").show();
               $("#pass").css("border-bottom","2px solid #F90A0A");
               error_password = true;
            }
           }

         $("#login_form").submit(function() {
            error_uname = false;
            error_pass = false;
            check_uname();
            check_pass();
            if (error_uname === false && error_pass === false) {
               alert("login Successfull");
               return true;
            } else {
               alert("Please Fill the login form Correctly");
               return false;
            }
         });
      });
   