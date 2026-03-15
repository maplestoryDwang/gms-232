var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("(收到了沙子图团的书信。)", 1, 2420021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#h0##k！是我，扎诺。不是别的，我们的据点被警卫队长提干给发现了。我觉得肯定是有谁告了密……", 1, 2420021, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不过不用担心，如果是别人我们也只能束手就擒了，但是你也知道，提干这个人只要我们稍微给他打点一下就可以帮我们闭一只眼。只不过这人实在是太贪婪了，要满足他我还差一些钱。", 1, 2420021, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("如果连你也被发现的话就太危险了，所以希望你能秘密地把钱交给我。到#b蓝色和粉色天棚在一起的房子里#k，把#r50000金币#k放在坛子里吧。那么就拜托你了。", 1, 2420021, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(41063, "");
                            cm.forceStartQuest(41063, "");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41063.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.gainExp(640000);
            cm.forceCompleteQuest(41063);
            cm.gainItem(4310085, 5);
            cm.gainItem(2001530, 25);
            cm.dispose()
        }
    }
};