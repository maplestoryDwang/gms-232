var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("你们看到这镜子了吗？这是能读取人的记忆的镜子。", 37, 1540514, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("通常情况下，我们会保护自己的记忆，不让其他人接近。\r\n不过，那个名叫奥尔卡的少女已经失去意识……\r\n或许读取她的记忆是可行的。", 37, 1540514, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("果然这种时候还是你最可靠。怎么样，你准备好了吗？", 37, 1540514, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那我们进去看看吧？\r\n进入奥尔卡的记忆……", 37, 1540514, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(33158, "");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {} else {
            cm.dispose()
        }
    }
};