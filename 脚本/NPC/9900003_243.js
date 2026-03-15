var aaa = '#fUI/UIWindow.img/PvP/Scroll/enabled/next2#';
var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(1542063, 1212063, 1222058, 1232057, 1242060, 1242061, 1302275, 1312153, 1412135, 1322203, 1332225, 1342082, 1362090, 1372177, 1382208, 1402196, 1422140, 1432167, 1442223, 1452205, 1462193, 1472214, 1482168, 1492179, 1522094, 1532098, 1252015);
var needItemList = Array(Array(4310030, 2000), Array(4310036, 5000), Array(4033356, 50), Array(4021012, 30), Array(4021011, 30), Array(4021010, 30), Array(4000082, 400), Array(4000124, 50), Array(4310015, 3), Array(4021019, 1));
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
            var a = '#d我这里可以制作150级武器，请选择想要制作的装备：#n#k\r\n';
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