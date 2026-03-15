var status = -1;
var selectionLog = [];
var tier = ["初级", "中级", "高级", "资深", "精英", "大师"];
var upgrade = [0, 500, 1000, 1500, 2000, 3000];
var skill = [80000584, 80000583, 80002703, 80002705, 80002707, 80002709];

function start(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    var a = -1;
    selectionLog[status] = b;
    var g = cm.getNumberFromQuestInfo(100161, "lv", 1);
    var d = cm.getNumberFromQuestInfo(100161, "point");
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var e = "#b#e<大冒险等级>申请升级！#n#k\r\n\r\n";
            e += "- 当前<大冒险等级>：#b" + tier[g - 1] + "（" + (7 - g) + "级）#k\r\n";
            if (g == 6) {
                e = "\r\n你已经是最高等级大冒险家了。恭喜！";
                cm.sendOk(e, 9062143);
                cm.dispose()
            } else {
                e += "- 下一<大冒险等级>：#b" + tier[g] + "（" + (6 - g) + "级）#k\r\n\r\n- 升级所需费用：#b" + upgrade[g] + "大冒险币#k\r\n";
                e += "- 当前拥有大冒险币：#r" + d + "大冒险币";
                if (d < upgrade[g]) {
                    e += "（缺少" + (upgrade[g] - d) + "大冒险币）"
                }
                e += "#k\r\n";
                e += "\r\n#L0# #b<大冒险等级>申请升级#l#k";
                cm.askMenu(e, 9062143)
            }
        } else {
            if (status === a++) {
                if (d < upgrade[g]) {
                    cm.sendOk("\r\n要想升到#b<大冒险等级>中级#k，\r\n需要#r500个大冒险币#k！", 9062143)
                } else {
                    cm.setNumberForQuestInfo(100161, "lv", g + 1);
                    cm.addNumberForQuestInfo(100161, "point", -upgrade[g]);
                    cm.sendOk("\r\n你已经是#b" + tier[g] + "大冒险家#k了。恭喜！", 9062143);
                    cm.teachSkill(80000582, g - 1);
                    cm.teachSkill(skill[g - 1], -1, 0);
                    cm.teachSkill(skill[g], 1)
                }
            } else {
                if (status == a++) {
                    cm.dispose()
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose()
        }
    }
};