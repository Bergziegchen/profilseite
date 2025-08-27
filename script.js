function prüfeEingabe() {
      const eingabe = document.getElementById("Quiz").value;
      if (eingabe === "17") {
        document.getElementById("Lampenbild").src ="img/1582439.png"; // Beispielbild rot
        document.getElementById("Bergziege").src = "";
      } else {
        document.getElementById("Lampenbild").src = "img/1582286.png"; // Standardbild
        document.getElementById("Bergziege").src = "img/nahaufnahme-eines-pferdes_1048944-20042934.avif";
      }
    }
