var status = -1;
var selectionLog = [];

function start(e, f, h) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = h;
    var d = -1;
    if (status <= d++) {
        cm.dispose()
    } else {
        if (status == d++) {
            cm.openUI(1175);
            var c = cm.getNumberFromQuestInfo(100488, "lv");
            var k = "\r\n#b一起来装饰骨碌骨碌屋吧！要怎么装扮呢？#k\r\n\r\n";
            for (var d = 0; d < modules.length; d++) {
                k += "#i" + (2631286 + d) + "#";
                k += c >= (d + 3) ? ("#b#L" + d + "#[" + (d + 3) + "级] 变更" + modules[d] + "#k#l") : "#k ·[" + (d + 3) + "级] 变更" + modules[d] + "#k";
                k += "\r\n"
            }
            cm.askMenu(k, 9062276)
        } else {
            if (status == d++) {
                var k = "\r\n#e#b[ 变更 ]#n#k 选一选喜欢的外形吧！";
                k += "\r\n#b#L0# " + defaults[selectionLog[1]] + "#l#k";
                var b = cm.getStringFromQuestInfo(100489 + selectionLog[1], "check").toCharArray();
                var j = typeItemBorders[selectionLog[1]];
                for (var d = 1; d < b.length; d++) {
                    if (b[d] > "0") {
                        k += "\r\n#b#L" + d + "# #t" + (j + d) + "##l#k"
                    } else {
                        k += "\r\n#L" + d + "# #t" + (j + d) + "#（未获得）#l#k"
                    }
                }
                k += "\r\n";
                cm.askMenu(k, 4, 9062276)
            } else {
                if (status === d++) {
                    var g = selectionLog[1] + 3;
                    var a = cm.getNumberFromQuestInfo(100488, "lv");
                    var b = cm.getStringFromQuestInfo(100489 + selectionLog[1], "check").toCharArray();
                    if (a < g) {
                        cm.sendNormalTalk("我的骨碌骨碌屋是#e#bLv." + a + "#n#k。这个外形从#e#rLv." + g + "#n#k开始可以使用……\r\n请继续升级吧！", 4, 9062276, false, false)
                    } else {
                        if (b[h] > "0") {
                            cm.setNumberForQuestInfo(100488, "part" + selectionLog[1], h + (a >= 6 ? 0 : 10));
                            cm.playerMessage(-1, "已变更骨碌骨碌屋外形！");
                            cm.playerMessage(5, "已变更骨碌骨碌屋外形！");
                            cm.effect_Voice("UI.img/productSuccess", 100)
                        } else {
                            cm.sendNormalTalk("\r\n该外形还未被登记！\r\n去收集更多的外形吧！", 4, 9062276, false, false)
                        }
                    }
                    cm.dispose()
                }
            }
        }
    }
}
var modules = ["墙壁", "尖角", "脸颊", "窗户", "标记", "品克缤玩具", "房顶装饰", "门", "特效", "共同座椅"];
var defaults = ["骨碌骨碌屋的墙壁：粉色", "骨碌骨碌屋的尖角：紫色", "骨碌骨碌屋的墙壁：粉色", "骨碌骨碌屋的窗户：粉色", "骨碌骨碌屋的标记：默认", "骨碌骨碌屋的品克缤玩具：无", "骨碌骨碌屋的房顶装饰：默认", "骨碌骨碌屋的门：默认", "骨碌骨碌屋的特效：无", "骨碌骨碌屋的共同座椅：无"];
var typeItemBorders = [2631295, 2631303, 2631311, 2631314, 2631320, 2631327, 2631338, 2631357, 2631373, 2631380, 2631382];