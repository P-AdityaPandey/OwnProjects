function updateDateTime() {
  const now = new Date();

  document.getElementById("date").innerText =
    now.toLocaleDateString("en-GB");

  document.getElementById("day").innerText =
    now.toLocaleDateString("en-US", { weekday: "long" });

  document.getElementById("time").innerText =
    now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime();
