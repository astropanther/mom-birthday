// Envelope click functionality - navigates to cake page
const envelope = document.getElementById('envelope');

// Navigate to cake page when envelope is clicked
envelope.addEventListener('click', function() {
    // Marcar que el usuario viene del sobre
    sessionStorage.setItem('fromEnvelope', 'true');
    window.location.href = 'cake.html';
});
