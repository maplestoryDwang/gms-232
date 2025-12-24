# Stage 1 ludibrium pq to stage 2
DIMENSIONAL_PASS_COUNT = "DimensionalPassCount"
if field.hasProperty(DIMENSIONAL_PASS_COUNT):
        if field.getProperty(DIMENSIONAL_PASS_COUNT) >= 20:
            sm.invokeForParty("warp", 922010400)