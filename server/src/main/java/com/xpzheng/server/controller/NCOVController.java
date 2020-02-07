package com.xpzheng.server.controller;

import com.alibaba.fastjson.JSON;
import com.xpzheng.server.controller.util.AjaxResult;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("api")
public class NCOVController {

    @GetMapping("data")
    public AjaxResult hello(){
        HttpClient client = HttpClients.createDefault();
        HttpGet get = new HttpGet("https://interface.sina.cn/news/wap/fymap2020_data.d.json");
        try {
            HttpResponse resp = client.execute(get);
            String data = EntityUtils.toString(resp.getEntity(), "UTF-8");
            return AjaxResult.success(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return AjaxResult.failure();
    }

}
