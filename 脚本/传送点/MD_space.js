var map = 220070001;
var exit = 220070000;

function start() {
    if (cm.getPlayer().getMapId() == map) {
        var b = cm.getEventInstance();
        if (b == null) {
            cm.warp(exit);
            return true
        }
        b.removePlayer(cm.getPlayer());
        cm.warp(exit);
        cm.getPlayer().message(5, "?鸿??甯??? ?㈣?剁???朵?杈? 纭煎??娌??艰??淇?.");
        return true
    } else {
        var a = cm.getEventManager("MiniDungeon");
        if (a == null) {
            cm.getPlayer().message(5, "?鸿??甯??? ?跺??璧?椋?淇? ?峰??? ??绉?娌??艰??淇?. GM淇??? 宸╃?肩Е ????澶?.");
            return false
        }
        if (cm.getPlayer().getParty() != null) {
            if (!cm.allMembersHere()) {
                cm.getPlayer().message(5, "棰??????? ??婊? ????涔?缁㈠?? 娑???涓? ?? 涔??艰??淇?.");
                return false
            }
            if (!cm.isLeader()) {
                cm.getPlayer().message(5, "棰??????? 娑???涓? ?? 涔??艰??淇?.");
                return false
            }
            a.setProperty("Leader_" + cm.getPlayer().getParty().getLeader().getId() + "_Exit", cm.getPlayer().getMapId() + "");
            a.setProperty("Leader_" + cm.getPlayer().getParty().getLeader().getId() + "_Map", map + "");
            a.startInstance(cm.getParty(), cm.getPlayer().getMap());
            cm.getPlayer().message(5, "?鸿??甯??? ?㈣?剁???朵? 娑????昏???艰??淇?.");
            var b = cm.getPlayer().getEventInstance();
            b.startEventTimer(7200000);
            return true
        } else {
            a.setProperty("Leader_" + cm.getPlayer().getId() + "_Exit", cm.getPlayer().getMapId() + "");
            a.setProperty("Leader_" + cm.getPlayer().getId() + "_Map", map + "");
            a.startInstance(cm.getPlayer());
            cm.getPlayer().message(5, "?鸿??甯??? ?㈣?剁???朵? 娑????昏???艰??淇?.");
            var b = cm.getPlayer().getEventInstance();
            b.startEventTimer(7200000);
            return true
        }
    }
};