import ndn = require("ndn-js");

let nack = new ndn.NetworkNack();
const reason: ndn.NetworkNack.Reason = nack.getReason();
const n: number = nack.getOtherReasonCode();
nack = nack.setReason(reason);
nack = nack.setOtherReasonCode(n);
