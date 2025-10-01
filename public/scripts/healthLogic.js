document.addEventListener('DOMContentLoaded', function() {
    /**
     * Calculates a health class based on seeders (se) and leechers (le).
     * Returns one of the following classes:
     * 'health-100', 'health-75', 'health-50', 'health-25', or 'health-0'
     */
    function calculateHealth(se, le) {
      const total = se + le;
      if (total === 0) return 'health-0';
      const ratio = se / total;
      const percentage = ratio * 100;
      if (percentage >= 75) return 'health-100';
      if (percentage >= 50) return 'health-75';
      if (percentage >= 25) return 'health-50';
      if (percentage > 0) return 'health-25';
      return 'health-0';
    }
  
    // Process each row in the category tables
    const rows = document.querySelectorAll('.category-box tbody tr');
    rows.forEach(row => {
      // Get the SE (seeders) and LE (leechers) cells
      const seCell = row.querySelector('.se');
      const leCell = row.querySelector('.le');
      if (!seCell || !leCell) return;
  
      // Extract the numbers. The seCell may have text nodes and a child (health-indicator)
      // so we use firstChild for se and full text for le.
      const se = parseInt(seCell.firstChild.textContent.trim(), 10) || 0;
      const le = parseInt(leCell.textContent.trim(), 10) || 0;
  
      // Find the health indicator container (the element that holds the health bars)
      const healthIndicator = seCell.querySelector('.health-indicator');
      if (!healthIndicator) return;
  
      // Determine the appropriate health class based on the se and le values
      const healthClass = calculateHealth(se, le);
  
      // Update the health indicator container's classes.
      // This applies the base "health-indicator" style along with the computed health class.
      healthIndicator.className = `health-indicator ${healthClass}`;
    });
  });
  