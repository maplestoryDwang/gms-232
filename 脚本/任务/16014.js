var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (status == 0 && c == 0) {
        cm.dispose();
        return
    }
    if (c == 1) {
        status++
    } else {
        status--
    }
    selectionLog[status] = a;
    if (status == 0) {
        对话首页()
    } else {
        switch (selectionLog[1]) {
            case 1:
                查看我的冒险岛联盟信息();
                break;
            case 2:
                提高冒险岛联盟级别();
                break;
            case 3:
                听取关于冒险岛联盟的介绍();
                break;
            case 4:
                一周获得纪念币排名();
                break;
            default:
                cm.dispose();
                break
        }
    }
}

function 对话首页() {
    text = "今天真是个猎龙的好天气！\r\n关于#b冒险岛联盟#k业务有什么可以帮你？\r\n\r\n";
    text += "#L1##b<查看我的冒险岛联盟信息。>#l\r\n";
    text += "#L2##b<提高冒险岛联盟级别。>#l\r\n";
    text += "#L3##b<听取关于冒险岛联盟的介绍。>#l\r\n";
    text += "#L4##b<一周获得纪念币排名>#l\r\n";
    cm.askMenu(text)
}

function 查看我的冒险岛联盟信息() {
    var a = "新手联盟第5阶段";
    var e = 19,
        b = 19;
    var d = 25;
    var c = 6666;
    if (status == 1) {
        text = "那我就来告诉勇士你#e冒险岛联盟#n信息吧？\r\n\r\n";
        text = "#e冒险岛联盟级别：#b<" + a + ">#k\r\n";
        text = "#e联盟等级：#b<" + c + ">#k\r\n";
        text = "#e持有联盟角色：#b<" + d + ">#k#n\r\n";
        text = "#e攻击队队员：#b<" + e + "/" + b + ">#k#n\r\n\r\n";
        cm.askMenu(text);
        status = -1
    }
}

function 提高冒险岛联盟级别() {
    var a = "新手联盟第5阶段",
        b = 13;
    var g = "资深联盟第1阶段",
        f = 18;
    var d = 3000,
        c = 170;
    var h = 6666,
        e = 999;
    if (status == 1) {
        text = "你要进行#e冒险岛联盟升级#n吗？\r\n\r\n";
        text = "#e当前级别：#b<" + a + ">#k\r\n";
        text = "#e下一级别：#b<" + g + ">#k\r\n";
        text = "#e升级后可投入的攻击队队员增加：#b<" + b + "→" + f + "名>#k#n\r\n\r\n";
        text = "要想升级必须满足以下条件。\r\n\r\n";
        text = "#e<联盟等级> #r" + d + "以上\r\n";
        text = "#e<支付币> #b联盟币" + c + "个#n\r\n\r\n";
        text = "要立即#e升级#n联盟吗？\r\n\r\n";
        cm.askYesNo(text)
    } else {
        if (status == 2) {
            if (h >= d && e >= c) {
                text = "你的#e冒险岛联盟#n升级成功了！\r\n\r\n";
                text = "#e当前级别：#b<" + g + ">#k\r\n";
                text = "#e可投入的攻击队队员：#b<" + f + "名>#k#n\r\n\r\n"
            } else {
                text = "你还不满足#e联盟升级#n的条件啊。继续努力吧。\r\n\r\n"
            }
            cm.askMenu(text);
            status = -1
        }
    }
}

function 听取关于冒险岛联盟的介绍() {
    cm.dispose();
    cm.openNpc(cm.getNpc(), "冒险岛联盟_帮助")
}

function 一周获得纪念币排名() {
    if (status == 1) {
        text = "你想要查看#b每周获得联盟币排名#k吗？\r\n有什么可以帮你的吗？\r\n\r\n";
        text += "#L1##b查看当前排名#l\r\n";
        text += "#L2##b查看上周排名#l\r\n";
        text += "#L3##b领取上周排名奖励#l\r\n";
        cm.askMenu(text)
    } else {
        if (status == 2) {
            cm.dispose();
            switch (selectionLog[2]) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                default:
                    cm.dispose();
                    break
            }
        } else {
            status = -1
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};