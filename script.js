document.addEventListener("DOMContentLoaded", function() {
    var head = document.getElementsByTagName("h1")[0];
    var originalText = head.textContent;
    var head2 = document.getElementsByTagName("h4")[0]; // Note the [0] here
    var ans = document.getElementsByTagName("p")[0]; // Note the [0] here

    head.addEventListener("click", function() {
      if (head.textContent === originalText) {
        head.textContent = "Walaikum assalalm";
        head.style.color = "red";
        
      } else {
        head.textContent = originalText;
        head.style.color = "";
      }
    });

    head2.addEventListener("click", function(){
      ans.textContent = "I am great, what about you?"
    });
});