for i in range(25):
    sm.getChr().addHonorExp(10000)
    sm.consumeItem(2434021)
    if not sm.hasItem(2434021):
        break
