function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

function contactWhatsApp(productType) {
    const sizeElement = document.getElementById(productType === 'Steel Cutting Plates' ? 'plateSize' : 'coilSize');
    const selectedSize = sizeElement.value;
    
    if (!selectedSize) {
        alert('Please select a size first');
        return;
    }

    const message = `Hi, I'm interested in ${productType} with ${selectedSize} thickness. Please provide more information.`;
    const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}