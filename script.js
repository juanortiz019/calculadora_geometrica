function showResult(elementId, area) {
    const resultElement = document.getElementById(elementId);
    resultElement.textContent = `El área es: ${area.toFixed(2)} unidades cuadradas`;
    resultElement.style.display = 'block';
}

// Cálculo del triángulo
function calculateTriangleArea() {
    const base = parseFloat(document.getElementById('triangle-base').value);
    const height = parseFloat(document.getElementById('triangle-height').value);
    
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Por favor ingrese valores válidos para base y altura');
        return;
    }
    
    const area = (base * height) / 2;
    showResult('triangle-result', area);
}

// Cálculo del círculo
function calculateCircleArea() {
    const radius = parseFloat(document.getElementById('circle-radius').value);
    
    if (isNaN(radius) || radius <= 0) {
        alert('Por favor ingrese un valor válido para el radio');
        return;
    }
    
    const area = Math.PI * Math.pow(radius, 2);
    showResult('circle-result', area);
}

// Cálculo del rectángulo
function calculateRectangleArea() {
    const length = parseFloat(document.getElementById('rectangle-length').value);
    const width = parseFloat(document.getElementById('rectangle-width').value);
    
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert('Por favor ingrese valores válidos para largo y ancho');
        return;
    }
    
    const area = length * width;
    showResult('rectangle-result', area);
}

// Cálculo del trapecio
function calculateTrapezoidArea() {
    const base1 = parseFloat(document.getElementById('trapezoid-base1').value);
    const base2 = parseFloat(document.getElementById('trapezoid-base2').value);
    const height = parseFloat(document.getElementById('trapezoid-height').value);
    
    if (isNaN(base1) || isNaN(base2) || isNaN(height) || base1 <= 0 || base2 <= 0 || height <= 0) {
        alert('Por favor ingrese valores válidos para las bases y la altura');
        return;
    }
    
    const area = ((base1 + base2) * height) / 2;
    showResult('trapezoid-result', area);
}

// Cálculo del cuadrado
function calculateSquareArea() {
    const side = parseFloat(document.getElementById('square-side').value);
    
    if (isNaN(side) || side <= 0) {
        alert('Por favor ingrese un valor válido para el lado');
        return;
    }
    
    const area = Math.pow(side, 2);
    showResult('square-result', area);
}
