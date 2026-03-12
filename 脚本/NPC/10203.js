var status = -1;

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 1) {
            cm.sendNext("你想体验一下飞侠职业的话，请再来找我吧。");
            cm.dispose();
            return
        }
        status--
    }
    if (cm.getMapId() != 1020000 && cm.getMapId() != 4000026) {
        cm.dispose();
        return
    }
    if (status == 0) {
        cm.sendNext("飞侠是具备运气及一定程度的敏捷性和力量的职业。擅长在战场中突袭对手，或隐身等特殊技能。飞侠的机动力和回避率非常高。通过多样的技能，玩家能体验到操控飞侠的乐趣。")
    } else {
        if (status == 1) {
            cm.askYesNo("你要体验一下飞侠职业吗？")
        } else {
            if (status == 2) {
                // cm.setDirectionMode(true);
                // cm.setStandAloneMode(true);
                cm.warp(1020400, 0);
                cm.dispose()
            }
        }
    }
};