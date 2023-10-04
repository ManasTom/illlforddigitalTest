const counters = document.querySelectorAll('.about_page_counter_count');
      
        const targetValues = [112, 3, 897, 20];
      
        counters.forEach((counter, index) => {
          const target = targetValues[index];
          const increment = Math.ceil(target / 400); // Increment to reach target in 100 steps
          let currentValue = 0;
      
          const updateCounter = () => {
            if (currentValue < target) {
              currentValue += increment;
              counter.textContent = currentValue;
              requestAnimationFrame(updateCounter);
            }
          };
      
          updateCounter();
        });