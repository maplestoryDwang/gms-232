sel = sm.sendNext("Where do you want to go to?\r\n\r\n#b"
                  "#L0#Continue to the End of the World#l\r\n"
                  "#L1#Go to the Giant's Heart#l\r\n")

if sel == 0:
    chr.warp(450012400, 3)
else:
    chr.warp(450012500, 2)
