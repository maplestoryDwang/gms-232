package net.swordie.webapi.protocol.result;


import com.fasterxml.jackson.annotation.JsonProperty;

public class StatusResult {

    @JsonProperty("Playercount") public int playerCount;
    @JsonProperty("StartTime") public String startTime;
    @JsonProperty("Version") public String version;
    @JsonProperty("IsShutdown") public boolean isShutdown;
    @JsonProperty("RemainingMin") public int remainingMin;
    @JsonProperty("ShutdownMin") public int shutdownMin;

}
