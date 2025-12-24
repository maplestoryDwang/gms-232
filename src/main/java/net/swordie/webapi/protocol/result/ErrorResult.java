package net.swordie.webapi.protocol.result;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorResult {

    @JsonProperty("err_msg")
    private String errorMessage;

    public ErrorResult(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
