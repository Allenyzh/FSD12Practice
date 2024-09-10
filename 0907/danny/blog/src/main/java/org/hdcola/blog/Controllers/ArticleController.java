package org.hdcola.blog.Controllers;

import org.hdcola.blog.Configs.CustomUserDetails;
import org.hdcola.blog.Entities.Article;
import org.hdcola.blog.Entities.User;
import org.hdcola.blog.Repositories.ArticleRepository;
import org.hdcola.blog.Repositories.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ArticleController {
    private final ArticleRepository articleRepository;
    private final UserRepository UserRepository;

    public ArticleController(ArticleRepository articleRepository, UserRepository userRepository) {
        this.articleRepository = articleRepository;
        UserRepository = userRepository;
    }

    @GetMapping("/article/new")
    public String newBlog(Model model) {
        Article article = new Article();
        model.addAttribute("article", article);
        return "article/new";
    }

    @PostMapping("/article/new")
    public String create(Authentication authentication, Article article, Model model) {
        CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();
        User user = customUserDetails.getUser();
        article.setUser(user);
        articleRepository.save(article);
        return "redirect:/article/list";
    }

    @GetMapping("/article/list")
    @Transactional(readOnly = true)
    public String list(Authentication authentication,Model model) {
        User user = UserRepository.findByEmail(authentication.getName());
        model.addAttribute("articles", articleRepository.findByUserId(user.getId()));
        return "article/list";
    }
}
