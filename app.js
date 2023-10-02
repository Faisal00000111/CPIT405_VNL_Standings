function filterByTeam() {
    let input = document.getElementById("searchBox");
    let word = input.value.toLowerCase();
    let tables = document.querySelectorAll(".vnlSchedule");
    for (table of tables) {
      let rows = document.querySelectorAll("tbody tr");
      doFilter(rows, 1, word);
    }
  }
  
  function doFilter(rows, column, word) {
    for (let i = 0; i < rows.length; i++) {
      let td = rows[i].getElementsByTagName("td")[column];
      let txtValue = td.innerText
      if (txtValue.toLowerCase().indexOf(word) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
  
  function filterByBroadcast() {
    let checkbox = document.querySelector(".toggle");
    let isChecked = checkbox.checked;
  
    let tables = document.querySelectorAll(".vnlSchedule");
    for (let table of tables) {
      let rows = table.querySelectorAll("tbody tr");
      doFilterByChampionships(rows, isChecked);
    }
  }
  
  function doFilterByChampionships(rows, isChecked) {
    for (let i = 0; i < rows.length; i++) {
      let tds = rows[i].getElementsByTagName("td");
      let championships1 = parseInt(tds[2].innerText);
      let championships2 = parseInt(tds[3].innerText);
  
      if (isChecked) {
        if (championships1 > 0 || championships2 > 0) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      } else {
        if (championships1 === 0 && championships2 === 0) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  }
  