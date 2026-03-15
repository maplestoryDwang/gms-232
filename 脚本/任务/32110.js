var status = -1;
var selectionLog = [];

function start(d, b, a) {
    if (d == 0 && b == 0) {
        status--
    } else {
        if (d == -1) {
            cm.dispose();
            return
        } else {
            status++
        }
    }
    selectionLog[status] = a;
    if (status == 0) {
        cm.sendNext("你来啦，#h #。那么开始搜索吧？")
    } else {
        if (status == 1) {
            cm.sendNextPrevS("从哪里开始入手呢？")
        } else {
            if (status == 2) {
                cm.sendNextPrev("你知道孩子们最喜欢什么吗？就是他们之间的秘密。我也常常背着师傅，偷偷和其他弟子交换纸条，然后偷偷地笑呢。有时也在秘密的地方藏东西。那种事情可是非常有趣的呢。")
            } else {
                if (status == 3) {
                    var c = "凭我的直觉，孩子们之间有个共同的秘密。那个秘密应该就是关键。不过现在的问题是，要怎样做才能找到孩子们的秘密呢？\r\n\r\n";
                    c += "#L1##b先找到孩子们之后，再询问秘密。#l\r\n";
                    c += "#L2##b寻找一下写有秘密的纸条如问？#l\r\n";
                    c += "#L3##b我也不知道，你怎么看？#l\r\n";
                    cm.askMenu(c)
                } else {
                    if (status == 4) {
                        if (selectionLog[4] == 1) {
                            cm.sendNext("#h #，清醒一点。我不是说过嘛，我们得先掌握那个秘密，才能找到孩子。你前后颠倒啦！");
                            status -= 2
                        } else {
                            if (selectionLog[4] == 2) {
                                cm.sendNext("这个想法不错。最好寻找一下孩子们在上课时偷偷交换的纸条。")
                            } else {
                                cm.sendNext("我也是没有什么好办法所以才问的。说说你的看法吧。");
                                status -= 2
                            }
                        }
                    } else {
                        if (status == 5) {
                            cm.askAcceptDecline("这些#r下级魔法书#k身上肯定有纸条。据我刚刚观察，你好像身手不错。那你应该能消灭#r下级魔法书#k，并找出#b男生们的纸条#k吧？")
                        } else {
                            if (status == 6) {
                                cm.sendNext("查看纸条时，上面会有有用的信息，当然也会有没用的信息。\r\n所以每次获得纸条的时候，必须对内容进行确认！\r\n（消灭#r下级魔法书#k，搜寻#b男生们的纸条#k，并确认内容。)")
                            } else {
                                if (status == 7) {
                                    cm.forceStartQuest();
                                    cm.dispose()
                                } else {
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};