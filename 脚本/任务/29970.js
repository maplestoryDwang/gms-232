var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.sendNext("Phantom！La nguoi sao!")
        } else {
            if (status == 1) {
                cm.sendNextPrev("Trong nguoi co ve kha manh day.")
            } else {
                if (status == 2) {
                    cm.sendNextPrev("Nhung muon vao trong hay buoc qua xac ta truoc da")
                } else {
                    if (status == 3) {
                        cm.askMenu("Come here baby. hahahahaha")
                    } else {
                        if (status == 4) {
                            cm.forceStartQuest();
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {};