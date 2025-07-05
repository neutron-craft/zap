function create() {
    const tooltip = document.createElement("div");
    tooltip.id = "tooltip1";
    tooltip.className = "tooltip-box1";
    document.body.appendChild(tooltip);
}
export function tooltip1_f1() {
    
    create();

    const tooltip = document.getElementById("tooltip1");
    const elements = document.querySelectorAll(".tooltip");
    
    elements.forEach(element => {

        element.addEventListener("mouseover", (e) => {
            const text = element.getAttribute("data-tooltip");
            tooltip.textContent = text;
            tooltip.style.opacity = 1;
            tooltip.style.display = "block";
        });
        element.addEventListener("mousemove", (e) => {
            tooltip.style.left = e.pageX + 10 + "px";
            tooltip.style.top = e.pageY + 10 + "px";
        });
        element.addEventListener("mouseout", () => {
            tooltip.style.opacity = 0;
            tooltip.style.display = "none";
        });
    
    });

}