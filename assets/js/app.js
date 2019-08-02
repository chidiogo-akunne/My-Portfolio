$(document).ready(function(){

        //contact us

  $('#contactButton').on('click', function(e) {
    let data = {
      name: $('#userName').val(),
      email: $('#userEmail').val(),
      subject: $('#userSubject').val(),
      message: $('#userMessage').val()
    }
    createContact(data);
    $('#contactForm').trigger('reset');
    $('#contactForm').show();
    e.preventDefault();
    })
//     function createContact(contactData) {
//       $.ajax({
//         url: 'http://localhost:3000/contact',
//         method: 'POST',
//         data: contactData,
//         success: function() {
//           alert('Message sent successfully, I will get back to you shortly!');
//           console.log(contactData);
//         }
//       });
//     }
// })