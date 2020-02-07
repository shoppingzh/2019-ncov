package com.xpzheng.server.controller.util;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AjaxResult {

    private boolean success;
    private Object data;
    private String msg;

    public static AjaxResult success(Object data) {
        return new AjaxResult(true, data, null);
    }

    public static AjaxResult failure() {
        return new AjaxResult(false, null, null);
    }

    public static AjaxResult failure(String msg) {
        return new AjaxResult(false, null, msg);
    }

}
