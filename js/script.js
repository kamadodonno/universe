function nextPage() {
  alert("This will go to the next page — like a memory timeline, love letter, etc.");
  // You can replace alert with window.location.href = "page2.html";
}

<script>
  const line1 = "Wishing the happiest birthday to the amazing soul I’ve met! 💫";
  const line2 = "To the most beautiful girl in the world...";
  const speed = 60;

  let i = 0, j = 0;

  function typeLine1() {
    if (i < line1.length) {
      document.getElementById("typewriter-line-1").innerHTML += line1.charAt(i);
      i++;
      setTimeout(typeLine1, speed);
    } else {
      setTimeout(typeLine2, 500); // delay before second line
    }
  }

  function typeLine2() {
    if (j < line2.length) {
      document.getElementById("typewriter-line-2").innerHTML += line2.charAt(j);
      j++;
      setTimeout(typeLine2, speed);
    }
  }

  window.onload = typeLine1;
</script>
