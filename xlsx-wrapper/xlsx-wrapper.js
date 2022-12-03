var xlsx = require("node-xlsx");

module.exports = function (RED) {
    function XlsxWrapper(config) {
        RED.nodes.createNode(this, config);
        let node = this;
        node.on("input", function (msg) {
            msg.payload = xlsx.build(msg.payload);
            node.send(msg);
        });
    }

    RED.nodes.registerType("xlsx-wrapper", XlsxWrapper);
};
