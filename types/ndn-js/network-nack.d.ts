export namespace NetworkNack {
    enum Reason {
        NONE       = 0,
        CONGESTION = 50,
        DUPLICATE  = 100,
        NO_ROUTE   = 150,
        OTHER_CODE = 0x7fff,
    }
}

export class NetworkNack {
    constructor();
    getReason(): NetworkNack.Reason;
    getOtherReasonCode(): number;
    setReason(reason: NetworkNack.Reason): NetworkNack;
    setOtherReasonCode(otherReasonCode: number): NetworkNack;
}
