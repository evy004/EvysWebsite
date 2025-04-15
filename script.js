// Smooth scrolling for the "Explore" button
document.querySelector('#exploreBtn').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Download Resume functionality for the "Download Resume" button
  document.querySelector('#downloadBtn').addEventListener('click', function() {
    const resumeUrl = 'files/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'EvyNg_Resume.pdf'; // Name the downloaded file
    link.click();
  });
  