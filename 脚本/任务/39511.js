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
            cm.askAcceptDecline_Bottom("#face11#收集#r#o2400550##k的#b#i4036576# #t4036576##k，刻上天地人的字样。\r\n……不过就是超简单的修炼嘛，那就开始吧？", 36, 3001674 + cm.getPlayer().getGender())
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face10#既然积压了有大概100天……呵呵，#b10根#k应该够了吧？\r\n去道术修炼场收集木头段儿，放在#b#p3001630##k处。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face7#对了，在此之前……要先确保药水充足才是。\r\n哈哈，可能是午觉睡太久了，我的记忆都开始模糊了呢，让我瞧瞧……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.openUIWithOption(0, 2);
                        cm.sendNormalTalk_Bottom("#face5#有好好放在背包里呢，我记得不久前我从师父的抽屉里拿走了一些，\r\n为了让药水方便取用，放入快捷栏吧。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(39511, "");
                            cm.OnStartNavigation(993160002, 0, "", 39511);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39511.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.warp(993160133, 0, false);
            cm.dispose()
        }
    }
};