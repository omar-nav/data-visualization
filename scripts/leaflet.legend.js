// Coloring methods
function choroplethizeCellSubscriptions(d) {
  return d > 99
    ? '#045a8d'
    : d > 60
    ? '#2b8cbe'
    : d > 44
    ? '#74a9cf'
    : d > 28
    ? '#bdc9e1'
    : d > 0
    ? '#f1eef6'
    : // if not available
      '#cccccc';
}
