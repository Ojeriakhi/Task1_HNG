  function displayCurrentDay() {
        var currentDate = new Date().toLocaleDateString('en-EN', { weekday: 'long' });
        var element = document.querySelector('[ data-testid="currentDayOfTheWeek" ]');
        element.textContent = currentDate;
    }
    displayCurrentDay();
    function displayCurrentTime() {
        const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
        function updateCurrentTime() {
          const currentTime = Date.now();
          timeElement.textContent = currentTime;
        }
        // Initial update
        updateCurrentTime();
        // Update the current time every second (1000 milliseconds)
        setInterval(updateCurrentTime, 1000);
      }
      displayCurrentTime();