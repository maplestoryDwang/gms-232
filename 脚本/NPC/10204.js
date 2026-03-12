var status = -1;

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 1) {
            cm.sendNext("你想体验一下海盗职业的话，请再来找我吧。");
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
        cm.sendNext("海盗拥有出色的敏捷性和力量，能够使用百发百中的手枪，或瞬间制敌的体术。火枪手能够利用不同属性的子弹发动有效进攻，或在搭乘战船后发动更加强大的攻击。拳手可通过变身发挥强大的体术。")
    } else {
        if (status == 1) {
            cm.askYesNo("你要体验一下海盗职业吗？")
        } else {
            if (status == 2) {
                // cm.setDirectionMode(true);
                // cm.setStandAloneMode(true);
                cm.warp(1020500, 0);
                cm.dispose()
            }
        }
    }
};