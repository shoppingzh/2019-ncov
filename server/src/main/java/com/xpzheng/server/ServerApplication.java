package com.xpzheng.server;

import com.xpzheng.server.filter.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean corsFilterRegistration() {
	    FilterRegistrationBean registration = new FilterRegistrationBean(new CorsFilter());
	    registration.addUrlPatterns("/api/*");
	    return registration;
    }

}
