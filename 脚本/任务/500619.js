var status = -1;
var selectionLog = [];
var tier = ["初级", "中级", "高级", "资深", "精英", "大师"];
var reward = [
    [2450141, 5],
    [2023654, 5],
    [2023672, 5],
    [2436078, 5],
    [2435924, 1],
    [2434921, 1],
    [2434288, 5],
    [4001864, 5],
    [2434917, 5],
    [2630181, 50],
    [1712001, 10],
    [1712002, 10],
    [1712003, 10],
    [1712004, 10],
    [1712005, 10],
    [1712006, 10]
];

function start(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    var a = -1;
    selectionLog[status] = b;
    var e = cm.getNumberFromQuestInfo(100114, "reward");
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var g = cm.getNumberFromQuestInfo(100161, "lv", 1);
            var d = "#b#e<大冒险等级>每周奖励！#n#k\r\n\r\n- 当前<大冒险等级>：#b" + tier[g - 1] + "（" + (7 - g) + "级）#k\r\n#r（每周奖励从中级（5级）以上开始可以获得）#k\r\n#L1# #b查看<大冒险等级>每周奖励列表#l#k";
            if (!isSameWeek(new Date().getTime(), cm.getNumberFromQuestInfo(100114, "time"))) {
                cm.setNumberForQuestInfo(100114, "time", new Date().getTime());
                e = (g - 1) * 2;
                cm.setNumberForQuestInfo(100114, "reward", e)
            }
            if (e > 0) {
                d += "\r\n\r\n#b※ 本周还可以领取 #e" + e + "#n 件奖励#n\r\n#b"
            } else {
                d += "\r\n\r\n#b※ 需要等到下星期才能再次领取<大冒险等级>的每周奖励#k"
            }
            cm.askMenu(d, 9062143)
        } else {
            if (status === a++) {
                var d = "\r\n#e<大冒险等级>每周奖励列表#n\r\n#b";
                if (e > 0) {
                    d += "\r\n#b※ 本周还可以领取 #e" + e + "#n 件奖励#n\r\n#b"
                } else {
                    cm.dispose()
                }
                reward.forEach(function (i, h) {
                    d += "\r\n  ";
                    if (e > 0) {
                        d += "#L" + h + "#"
                    }
                    d += "#i" + i[0] + ":#  #t" + i[0] + ":# " + i[1] + "个";
                    if (e > 0) {
                        d += "#l"
                    }
                });
                cm.sendOk(d, 9062143)
            } else {
                if (status === a++) {
                    var d = "恭喜！这是你的奖励！";
                    d += "\r\n  #b#i" + reward[b][0] + ":#  #t" + reward[b][0] + ":# " + reward[b][1] + "个";
                    cm.sendOk(d, 9062143);
                    cm.gainItem(reward[b][0], reward[b][1]);
                    cm.addNumberForQuestInfo(100114, "reward", -1)
                } else {
                    cm.dispose()
                }
            }
        }
    }
}

function isSameWeek(b, d) {
    var c = 1000 * 60 * 60 * 24;
    var a = parseInt(+b / c);
    var e = parseInt(+d / c);
    return parseInt((a + 4) / 7) == parseInt((e + 4) / 7)
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