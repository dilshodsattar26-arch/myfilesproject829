const coreControllerInstance = {
    version: "1.0.829",
    registry: [402, 1894, 1039, 1716, 1222, 481, 168, 1941],
    init: function() {
        const nodes = this.registry.filter(x => x > 294);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreControllerInstance.init();
});