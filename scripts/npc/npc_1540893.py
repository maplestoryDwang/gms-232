# Quartermaster Sakaro
# 1540893
# Deserted Camp (105300000)
# Exchanges 20 Faint Stigma Spirit Stones and 1 Twisted Stigma Stone for a Stigma Coin.

faintStigma = 4001868
twistedStigma = 4001869
stigmaCoin = 4310199

faintReq = 20
twistedReq = 1
faintStigmaStr = sm.formatInlineItem(faintStigma)
twistedStigmaStr = sm.formatInlineItem(twistedStigma)
stigmaCoinStr = sm.formatInlineItem(stigmaCoin)

faintQuantity = sm.getQuantityOfItem(faintStigma)
twistedQuantity = sm.getQuantityOfItem(twistedStigma)

if faintQuantity >= faintReq and twistedQuantity >= twistedReq:
    # How many coins can the user exchange up to?
    faintQuotient = faintQuantity // faintReq
    twistedQuotient = twistedQuantity // twistedReq
    purchaseCap = min(faintQuotient, twistedQuotient, 100)

    sm.sendNext("Ah, a Spirit Stone marked by the stigma of vengeance.")
    sm.sendNext(sm.join(["Give to me ", repr(faintReq), " ", faintStigmaStr, " and ", repr(twistedReq), " ", twistedStigmaStr, ", \r\n"
    "and I'll give you 1 ", stigmaCoinStr, " in return. What do you say? \r\n"
    "#L0# ", stigmaCoinStr, "#l"]))
    quantity = sm.sendAskNumber(sm.join(["You can get up to ", repr(purchaseCap), " #b#z", repr(stigmaCoin), "#(s)#k. "
    "How many do you want to trade? \r\n"
    "(#t", repr(faintStigma), "# in your possession: ", repr(faintQuantity), ") \r\n"
    "(#t", repr(twistedStigma), "# in your possession: ", repr(twistedQuantity), ") \r\n"]), 1, 1, purchaseCap)

    if not sm.canHold(stigmaCoin, quantity):
        sm.sendSayOkay("Please make room in your Etc. inventory.")
    else:
        sm.consumeItem(faintStigma, quantity*faintReq)
        sm.consumeItem(twistedStigma, quantity*twistedReq)
        sm.giveItem(stigmaCoin, quantity)
else:
    sm.sendSayOkay(sm.join(["Come to me when you have ", repr(faintReq), " ", faintStigmaStr, " and ", repr(twistedReq), " ", twistedStigmaStr, "."]))
