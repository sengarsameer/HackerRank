function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    const r = +(readLine());
    console.log(getArea(PI, r));
    console.log(getPerimeter(PI, r));
    
    // Print the area of the circle:
    function getArea(PI, r) {
        let area;
        area = PI * (r*r);
        return area;
    }  
    
    // Print the perimeter of the circle:
    function getPerimeter(PI, r) {
        let perimeter;
        perimeter = 2 * PI * r;
        return perimeter;
    }
