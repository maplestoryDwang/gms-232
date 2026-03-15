var status = -1;
var itemIcon = "#fUI/Basic.img/Cursor/32/0#";

function start(g, d, c) {
    (g == 1) ? status++ : status--;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.askYesNo("确定要去查看冒险岛新闻吗？")
        } else {
            if (status === b++) {
                var f = cm.getUpdateLog();
                var a = f.split("\n");
                var e = "";
                for (var b = 0; b < a.length; b++) {
                    if (a[b].indexOf("更新日志") > 0) {
                        e += itemIcon + "#k#e" + a[b] + "\r\n"
                    } else {
                        e += "#k#n" + a[b].replace("[主题副本]", "#e#b[#n主题副本#e]#n#k").replace("修复", "#r修复#k").replace("更新", "#g更新#k").replace("添加", "#g添加#k") + "\r\n"
                    }
                }
                cm.sendOk(e, 2140003)
            } else {
                if (status === b++) {
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