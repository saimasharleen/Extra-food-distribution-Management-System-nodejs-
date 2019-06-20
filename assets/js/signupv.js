"use strict"

$(function() {
         $("#fname_error_message").hide();
         $("#sname_error_message").hide();
         $("#email_error_message").hide();
         $("#phoneno_error_message").hide();
         $("#area_error_message").hide();
         $("#usertype_error_message").hide();
         $("#uname_error_message").hide();
         $("#password_error_message").hide();
         $("#retype_password_error_message").hide();
         var error_fname = false;
         var error_sname = false;
         var error_uname = false;
         var error_email = false;
         var error_phoneno = false;
         var error_area=false;
         var error_usertype=false;
         var error_password = false;
         var error_retype_password = false;
         $("#form_fname").focusout(function(){
            check_fname();
         });
         $("#form_sname").focusout(function() {
            check_sname();
         });
         $("#form_uname").focusout(function() {
            check_uname();
         });
         $("#form_email").focusout(function() {
            check_email();
         });
         $("#form_phoneno").focusout(function() {
            check_phoneno();
         });
         $("#form_area").focusout(function() {
            check_area();
         });
         $("#form_usertype").focusout(function() {
            check_usertype();
         });

         $("#form_password").focusout(function() {
            check_password();
         });
         $("#form_retype_password").focusout(function() {
            check_retype_password();
         });
         function check_fname() {
            var pattern = /^[a-zA-Z]*$/;
            var fname = $("#form_fname").val();
            if (pattern.test(fname) && fname !== '') {
               $("#fname_error_message").hide();
               $("#form_fname").css("border-bottom","2px solid #34F458");
            } else {
               $("#fname_error_message").html("Should contain only Characters");
               $("#fname_error_message").show();
               $("#form_fname").css("border-bottom","2px solid #F90A0A");
               error_fname = true;
            }
         }
         function check_sname() {
            var pattern = /^[a-zA-Z]*$/;
            var sname = $("#form_sname").val()
            if (pattern.test(sname) && sname !== '') {
               $("#sname_error_message").hide();
               $("#form_sname").css("border-bottom","2px solid #34F458");
            } else {
               $("#sname_error_message").html("Should contain only Characters");
               $("#sname_error_message").show();
               $("#form_sname").css("border-bottom","2px solid #F90A0A");
               error_fname = true;
            }
         }
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
         function check_phoneno() {
            var pattern = /^\d{11}$/;
            var phoneno = $("#form_phoneno").val()
            if (pattern.test(phoneno) && phoneno !== '') {
               $("#phoneno_error_message").hide();
               $("#form_phoneno").css("border-bottom","2px solid #34F458");
            } else {
               $("#phoneno_error_message").html("Phone Number Should Contain 11 numbers");
               $("#phoneno_error_message").show();
               $("#form_phoneno").css("border-bottom","2px solid #F90A0A");
               error_phoneno = true;
            }
           }
            function check_area() {
            var pattern = /^[a-zA-Z]*$/;
            var area = $("#form_area").val();
            if (pattern.test(area) && area !== '') {
               $("#area_error_message").hide();
               $("#form_area").css("border-bottom","2px solid #34F458");
            } else {
               $("#area_error_message").html("Should contain only Characters");
               $("#area_error_message").show();
               $("#form_area").css("border-bottom","2px solid #F90A0A");
               error_area = true;
            }
         }
         function check_usertype(){
           var usertype = $("input[name='usertype']:checked").val();

            if(usertype){

               $("#usertype_error_message").hide();
               $("#form_usertype").css("border-bottom","2px solid #34F458");
            } else {
               $("#usertype_error_message").html("Please select one");
               $("#usertype_error_message").show();
               $("#form_usertype").css("border-bottom","2px solid #F90A0A");
               error_usertype = true;
            }
            }
         function check_password() {
            var pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
            var password = $("#form_password").val()
            if (pattern.test(password) && password !== '') {
               $("#password_error_message").hide();
               $("#form_password").css("border-bottom","2px solid #34F458");
            } else {
               $("#password_error_message").html("Should Contain UpperCase, LowerCase, Number/SpecialChar and min 8 Chars");
               $("#password_error_message").show();
               $("#form_password").css("border-bottom","2px solid #F90A0A");
               error_paasword = true;
            }
           }
         function check_retype_password() {
            var password = $("#form_password").val();
            var retype_password = $("#form_retype_password").val();
            if (password !== retype_password) {
               $("#retype_password_error_message").html("Passwords Did not Matched");
               $("#retype_password_error_message").show();
               $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
               error_retype_password = true;
            } else {
               $("#retype_password_error_message").hide();
               $("#form_retype_password").css("border-bottom","2px solid #34F458");
            }
         }
         function check_email() {
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $("#form_email").val();
            if (pattern.test(email) && email !== '') {
               $("#email_error_message").hide();
               $("#form_email").css("border-bottom","2px solid #34F458");
            } else {
               $("#email_error_message").html("Invalid Email");
               $("#email_error_message").show();
               $("#form_email").css("border-bottom","2px solid #F90A0A");
               error_email = true;
            }
         }
         $("#registration_form").submit(function() {
            error_fname = false;
            error_sname = false;
            error_uname = false;
            error_email = false;
            error_phoneno=false;
            error_area=false;
            error_usertype=false;
            error_password = false;
            error_retype_password = false;
            check_fname();
            check_sname();
            check_uname();
            check_email();
            check_phoneno();
            check_area();
            check_usertype();
            check_password();
            check_retype_password();
            if (error_fname === false && error_sname === false && error_uname === false && error_email === false && error_phoneno === false && error_area === false && error_usertype === false && error_password === false && error_retype_password === false) {
               alert("Registration Successfull");
               return true;
            } else {
               alert("Please Fill the form Correctly");
               return false;
            }
         });
      });
   