
// Layout.js
// ====================================================================
// ====================================================================
// - ThemeOn.net -


$(document).ready(function() {
    pathArray = window.location.href.split( '/' );
    protocol = pathArray[0];
    host = pathArray[2];
    url = protocol + '//' + host;
   
   
   // Main Wizard
   // =================================================================
   $('#reg-main-wz').bootstrapWizard({
      tabClass		: 'wz-steps',
      nextSelector	: '.next',
      previousSelector	: '.previous',
      onTabClick: function(tab, navigation, index) {	
         return false;
      },
      onInit : function(){
         $('#reg-main-wz').find('.finish').hide().prop('disabled', true);
      },
      onTabShow: function(tab, navigation, index) {
         var $total = navigation.find('li').length;
         var $current = index+1;
         var $percent = ($current/$total) * 100;
         var wdt = 100/$total;
         var lft = wdt*index;
         
         $('#reg-main-wz').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});
         
         
         // If it's the last tab then hide the last button and show the finish instead
         if($current >= $total) {
            $('#reg-main-wz').find('.next').hide();
            $('#reg-main-wz').find('.finish').show();
            $('#reg-main-wz').find('.finish').prop('disabled', false);
         } else {
            $('#reg-main-wz').find('.next').show();
            $('#reg-main-wz').find('.finish').hide().prop('disabled', true);
         }    
      }
   });
 
 
 
 
 
 
   // Classic
   // ================================================================= 
   $('#reg-cls-wz').bootstrapWizard({
      tabClass		: 'wz-classic',
      nextSelector	: '.next',
      previousSelector	: '.previous',
      onTabClick: function(tab, navigation, index) {
         return false;
      },
      onInit : function(){
         $('#reg-cls-wz').find('.finish').hide().prop('disabled', true);
      },
      onTabShow: function(tab, navigation, index) {
         var $total = navigation.find('li').length;
         var $current = index+1;
         var $percent = ($current/$total) * 100;
         var wdt = 100/$total;
         var lft = wdt*index;
         $('#reg-cls-wz').find('.progress-bar').css({width:$percent+'%'});
     
         // If it's the last tab then hide the last button and show the finish instead
         if($current >= $total) {
            $('#reg-cls-wz').find('.next').hide();
            $('#reg-cls-wz').find('.finish').show();
            $('#reg-cls-wz').find('.finish').prop('disabled', false);
         } else {
            $('#reg-cls-wz').find('.next').show();
            $('#reg-cls-wz').find('.finish').hide().prop('disabled', true);
         }    
      }
   });




   // Circular
   // =================================================================
   
   $('#reg-cir-wz').bootstrapWizard({
      tabClass		: 'wz-steps',
      nextSelector	: '.next',
      previousSelector	: '.previous',
      onTabClick: function(tab, navigation, index) {	
         return false;
      },
      onInit : function(){
         $('#reg-cir-wz').find('.finish').hide().prop('disabled', true);
      },
      onTabShow: function(tab, navigation, index) {
         var $total = navigation.find('li').length;
         var $current = index+1;
         var $percent = (index/$total) * 100;
         var margin = (100/$total)/2;
         $('#reg-cir-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});
         
         navigation.find('li:eq('+index+') a').trigger('focus');

   
         // If it's the last tab then hide the last button and show the finish instead
         if($current >= $total) {
            $('#reg-cir-wz').find('.next').hide();
            $('#reg-cir-wz').find('.finish').show();
            $('#reg-cir-wz').find('.finish').prop('disabled', false);
         } else {
            $('#reg-cir-wz').find('.next').show();
            $('#reg-cir-wz').find('.finish').hide().prop('disabled', true);
         }
      }
   })




   // Steps
   // =================================================================
   $('#reg-step-wz').bootstrapWizard({
      tabClass		: 'wz-steps',
      nextSelector	: '.next',
      previousSelector	: '.previous',
      onTabClick: function(tab, navigation, index) {	
         return false;
      },
      onInit : function(){
         $('#reg-step-wz').find('.finish').hide().prop('disabled', true);
      },
      onTabShow: function(tab, navigation, index) {
         var $total = navigation.find('li').length;
         var $current = index+1;
         var $percent = (index/$total) * 100;
         var wdt = 100/$total;
         var lft = wdt*index;
         var margin = (100/$total)/2;
         $('#reg-step-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});
         
         
         // If it's the last tab then hide the last button and show the finish instead
         if($current >= $total) {
             $('#reg-step-wz').find('.next').hide();
             $('#reg-step-wz').find('.finish').show();
             $('#reg-step-wz').find('.finish').prop('disabled', false);
         } else {
             $('#reg-step-wz').find('.next').show();
             $('#reg-step-wz').find('.finish').hide().prop('disabled', true);
         }
      }
   });






   // With Bootstrap Validator
   // =================================================================
   $('#reg-bv-wz').bootstrapWizard({
      tabClass		: 'wz-steps',
      nextSelector	: '.next',
      previousSelector	: '.previous',
      onTabClick: function(tab, navigation, index) {	
         return false;
      },
      onInit : function(){
         $('#reg-bv-wz').find('.finish').hide().prop('disabled', true);
      },
      onTabShow: function(tab, navigation, index) {
         var $total = navigation.find('li').length;
         var $current = index+1;
         var $percent = (index/$total) * 100;
         var margin = (100/$total)/2;
         $('#reg-bv-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});
         
         navigation.find('li:eq('+index+') a').trigger('focus');

         
         // If it's the last tab then hide the last button and show the finish instead
         if($current >= $total) {
             $('#reg-bv-wz').find('.next').hide();
             $('#reg-bv-wz').find('.finish').show();
             $('#reg-bv-wz').find('.finish').prop('disabled', false);
         } else {
             $('#reg-bv-wz').find('.next').show();
             $('#reg-bv-wz').find('.finish').hide().prop('disabled', true);
         }    
      },
      onNext: function(){
         isValid = null;
         $('#reg-bv-wz-form').bootstrapValidator('validate');
      
     
         if(isValid === false)return false;
      }
   });

   
   
   
   var isValid;
   $('#reg-bv-wz-form').bootstrapValidator({	
      message: 'This value is not valid',
      feedbackIcons: {
         valid: 'fa fa-check-circle fa-lg text-success',
         invalid: 'fa fa-times-circle fa-lg',
         validating: 'fa fa-refresh'
      },
      fields: {
          id: {
            message: 'The Student System ID is not valid',
            validators: {
                notEmpty: {
                      message: 'The Student System ID is required.'
                   },
                stringLength: {
                    min: 10,
                    max: 15,
                    message: 'The Student System ID must be 10-15 characters long'
                },
               remote: {
                   url: '../user/checkfields',
                   data: function(validator) {
                       return {
                           type:'system_id',
                           system_id: validator.getFieldElements('studentsystemID').val(),
                       };
                   },
                   message: 'The Student System ID is not available',
           
               }
            }
         },
         username: {
            message: 'The username is not valid',
            validators: {
                notEmpty: {
                      message: 'The Username is required.'
                   },
                stringLength: {
                    min: 4,
                    max: 30,
                    message: 'The Username must be more than 4 and less than 30 characters long'
                },
               remote: {
                   url: '../user/checkfields',
                   data: function(validator) {
                       return {
                           type:'username',
                           username: validator.getFieldElements('username').val(),
                       };
                   },
                   message: 'The Username is not available',
           
               }
            }
         },
         email: {
             emailAddress: {
                  message: 'The input is not a valid E-mail address'
               },
            validators: {
               notEmpty: {
                  message: 'The E-mail address is required and can\'t be empty'
               },
               remote: {
                   url: '../user/checkfields',
                   data: function(validator) {
                       return {
                           type:'email',
                           username: validator.getFieldElements('email').val(),
                       };
                   },
                   message: 'The E-mail address is not available',
               }
            }
         },
         firstName: {
           validators: {
               notEmpty: {
                  message: 'The First name is required and cannot be empty'
               },
               regexp: {
                  regexp: /^[A-Z\s]+$/i,
                  message: 'The First name can only consist of alphabetical characters and spaces'
               }
            }
         },
         lastName: {
            validators: {
               notEmpty: {
                  message: 'The Last name is required and cannot be empty'
               },
               regexp: {
                  regexp: /^[A-Z\s]+$/i,
                  message: 'The Last name can only consist of alphabetical characters and spaces'
               }
            }
         },
         middleName: {
            validators: {
               regexp: {
                  regexp: /^[A-Z\s]+$/i,
                  message: 'The Middle name can only consist of alphabetical characters and spaces'
               }
            }
         },
         phoneNumber: {
            validators: {
                notEmpty: {
                  message: 'The phone number is required and cannot be empty'
               },		    
               digits: {
                  message: 'The value can contain only digits'
               },
                stringLength: {
                    min: 11,
                    max: 11,
                    message: 'The Phone number must 11 characters long'
               }	    
            }
         },
         
         birthDate: {
            validators: {
               notEmpty: {
                  message: 'The Birth Date is required and cannot be empty'
               }
            }
         },
//         gender: {
//            validators: {
//               notEmpty: {
//                  message: 'The gender is required and cannot be empty'
//               },
//            }
//         },
         guardianName: {
            validators: {
                notEmpty: {
                  message: 'The Guardian name is required and cannot be empty'
               },
               regexp: {
                  regexp: /^[A-Z\s\.]+$/i,
                  message: 'The Guardian name can only consist of alphabetical characters and spaces'
               }
            }
         },
         guardianphoneNumber: {
            validators: {
               notEmpty: {
                  message: 'The phone number is required and cannot be empty'
               },		    
               digits: {
                  message: 'The value can contain only digits'
               },
                stringLength: {
                    min: 11,
                    max: 11,
                    message: 'The Phone number must 11 characters long'
                },
            }
         },
         address: {
            validators: {
               notEmpty: {
                  message: 'The address is required'
               }
            }
         },
         guardianAddress: {
            validators: {
               notEmpty: {
                  message: 'The address of is required'
               }
            }
         }
      }  
   }).on('success.field.bv', function(e, data) {	    
      // $(e.target)  --> The field element
      // data.bv      --> The BootstrapValidator instance
      // data.field   --> The field name
      // data.element --> The field element
      
      var $parent = data.element.parents('.form-group');
      
      // Remove the has-success class
      $parent.removeClass('has-success');
      
      
      // Hide the success icon
      //$parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
   }).on('error.form.bv', function(e) {
      isValid = false;
   });
 // Datepicker with auto close
   // =================================================================
    $('#reg-dp-txtinput input').datepicker({autoclose:true});
//    $('#reg-msk-phone').mask('99999999999');
    $('#reg-msk-date').mask('99/99/9999');

});

$('#btnFinish').click(function() {
//        var system_id = $('#id').val();
//        var username = $('#username').val();
//        var email = $('#email').val();
//        var firstName = $('#firstName').val();
//        var lastName = $('#lastName').val();
//        var middleName = $('#middleName').val();
//        var birthDate = $('#reg-msk-date').val();
//        var gender = $('#gender').val();
//        var address = $('#address').val();
//        var phoneNumber = $('#reg-msk-phone').val();
//        var gName = $('#guardianName').val();
//        var gMobileno = $('#guardianNumber').val();
//        var gAddress= $('#guardianAddress').val();
        
//        alert(gAddress);
        
//        alert(system_id+username+email+firstName+lastName+middleName+birthDate+gender+address+phoneNumber+guardianName+guardianMobileno+guardianAddress);
//        register(system_id,username,email,firstName,lastName,middleName,birthDate,gender,address,phoneNumber,gName,gMobileno,gAddress)
    });
    
    function register(system_id,username,email,firstName,lastName,middleName,birthDate,gender,address,phoneNumber,gName,gMobileno,gAddress) {

    $.ajax({
        url: "../user/register",
        data: { 
            system_id: system_id,
            username:username,
            email: email,
            firstName:firstName,
            lastName:lastName,
            middleName:middleName,
            birthDate:birthDate,
            gender:gender,
            address:address,
            phoneNumber:phoneNumber,
            guardianName:gName,
            guardianMobileno:gMobileno,
            guardianAddress:gAddress 
        },
        type: "POST",
        dataType: 'json',
        success: function(data) {
            if (data.error) {
//                alert(data.error);
            } else {
//                alert(data.guardianMobileno)
//                $('#welcome').html("Your password is: " + data.password);
            }
        }
    });
}