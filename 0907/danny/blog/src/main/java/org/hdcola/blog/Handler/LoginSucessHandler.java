package org.hdcola.blog.Handler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.hdcola.blog.Configs.CustomUserDetails;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;

@Slf4j
public class LoginSucessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        log.info("Login Success "+ authentication.getName());
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        log.debug("User Details: "+ userDetails.getUser());
        response.sendRedirect("/");
    }
}
