var aaa = '#fUI/UIWindow.img/PvP/Scroll/enabled/next2#';
var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(1052314, 1052315, 1052316, 1052317, 1052318, 1082296, 1082297, 1082298, 1082299, 1082295, 1152110, 1152111, 1152112, 1152113, 1152108, 1102275, 1102276, 1102277, 1102278, 1102279, 1003172, 1003173, 1003174, 1003175, 1003176, 1072485, 1072486, 1072487, 1072488, 1072489);
var needItemList = Array(Array(4310036, 2000), Array(4000021, 100), Array(4001241, 5), Array(4001242, 5), Array(4004000, 50), Array(4004001, 50), Array(4004002, 50), Array(4004003, 50));
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, f, h) {
    if (e == -1) {
        cm.dispose();
    } else {
        if (e == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (e == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var a = '#d我这里可以制作140级防具，请选择想要制作的装备：#n#k\r\n';
            for (var k in weaponList) {
                var m = weaponList[k];
                a += '#r#L' + k + '#制作 #b#z' + m + '# #r[查看详情]\r\n';
            }
            cm.askMenu(a);
        } else {
            if (status == 1) {
                weaponId = h;
                var l = '- #e#d#z' + weaponList[weaponId] + '#需要的材料：#n#k\r\n\r\n#b';
                for (var k in needItemList) {
                    var n = cm.getItemName(needItemList[k][0]);
                    l += n;
                    for (var d = 0; d <= 25 - n.getBytes().length; d++) {
                        l += ' ';
                    }
                    var j = cm.getItemQuantity(needItemList[k][0]);
                    var c = '#g';
                    if (j < needItemList[k][1]) {
                        c = '#r';
                    }
                    l += c + j + ' / ' + needItemList[k][1] + ' 个#b\r\n';
                }
                l += '#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k';
                cm.askYesNo(l);
            } else {
                if (status == 2) {
                    flag = true;
                    for (var k in needItemList) {
                        var g = needItemList[k][0];
                        var b = needItemList[k][1];
                        if (!cm.haveItem(g, b)) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        if (cm.getSpace(1) < 1) {
                            cm.sendOk('装备栏空间不足，请整理后重新制作！');
                            cm.dispose();
                            return;
                        }
                        for (var k in needItemList) {
                            var g = needItemList[k][0];
                            var b = needItemList[k][1];
                            cm.gainItem(g, -b);
                        }
                        cm.gainItem(weaponList[weaponId], 1);
                        cm.sendOk('恭喜您合成#z' + weaponList[weaponId] + '#一把.');
                        cm.worldSpouseMessage(32, '[任务公告] : 恭喜 ' + cm.getPlayer().getName() + ' 制作了一件 <' + cm.getItemName(weaponList[weaponId]) + '>.');
                        cm.dispose();
                    } else {
                        cm.sendOk('材料不足，无法完成制作！');
                        cm.dispose();
                    }
                }
            }
        }
    }
}