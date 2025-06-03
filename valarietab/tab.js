document.querySelectorAll('.bottom-center-links a').forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Clicked: ${link.href}`);
  });
});
