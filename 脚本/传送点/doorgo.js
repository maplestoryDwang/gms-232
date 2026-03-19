function start() {
    try {
        var b = "";
        var a = "";
        switch (cm.getPortal().getId()) {
            case 18:
                b = "gate00";
                a = "gt00PI";
                break;
            case 19:
                b = "gate01";
                a = "gt01PI";
                break;
            case 20:
                b = "gate02";
                a = "gt02PI";
                break;
            case 21:
                b = "gate03";
                a = "gt03PI";
                break;
            case 22:
                b = "gate04";
                a = "gt04PI";
                break;
            case 23:
                b = "gate05";
                a = "gt05PI";
                break;
            case 24:
                b = "gate06";
                a = "gt06PI";
                break
        }
        if (cm.getMap().getReactorByName(b).getState() >= 4) {
            cm.warp(670010600, a + "A")
        }
    } catch (c) {
        cm.playerMessage(5, "Error: " + c)
    }
};