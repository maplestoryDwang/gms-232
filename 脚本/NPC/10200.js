var status = -1;

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 1) {
            cm.sendNext("你想体验一下弓箭手职业的话，请再来找我吧。");
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
        cm.sendNext("弓箭手是敏捷性和力量兼备的职业。负责在战场后方进行远距离攻击。擅长利用地形进行狩猎。")
    } else {
        if (status == 1) {
            cm.askYesNo("你要体验一下弓箭手职业吗？")
        } else {
            if (status == 2) {
                cm.setInGameDirectionMode(true);
                // cm.setStandAloneMode(true);
                cm.warp(1020300, 0);
                cm.dispose()
            }
        }
    }
};