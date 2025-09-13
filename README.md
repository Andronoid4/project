<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Главная - Название вашего сайта</title>
    <meta name="description" content="Краткое описание главной страницы вашего сайта">
    <link rel="icon" href="../assets/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="site-header">
        <div class="container site-header__inner">
            <a class="site-header__brand" href="/">Сайт</a>
            <nav class="site-nav">
                <ul class="site-nav__list">
                    <li class="site-nav__item"><a class="site-nav__link site-nav__link--current" href="index.html">Главная</a></li>
                    <li class="site-nav__item"><a class="site-nav__link" href="about.html">О нас</a></li>
                    <li class="site-nav__item"><a class="site-nav__link" href="contacts.html">Контакты</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main class="container">
        <section class="hero">
            <h1 class="hero__title">Добро пожаловать на наш сайт!</h1>
            <p class="hero__description">Мы создаем.</p>
        </section>
        <img class="responsive-image" 
             srcset="assets/project-640.jpg 640w,
                     assets/project-960.jpg 960w,
                     assets/project-1280.jpg 1280w"
             sizes="(max-width: 768px) 94vw, 640px"
             src="assets/project-640.jpg"
             alt="Наш главный проект"
             width="640"
             height="360"
             loading="lazy">
        <section class="section" id="services">
            <h2>Наши услуги</h2>
            <p>Описание предоставляемых услуг...</p>
            <a href="#contacts">Связаться с нами</a>
        </section>
        <section class="section" id="portfolio">
            <h2>Портфолио</h2>
            <p>Примеры наших работ...</p>
        </section>
        <div class="media-container">
            <iframe src="https://rutube.ru/play/embed/c71a722e6f74234eba54043ca507572b" 
                    title="Видео о нашем проекте"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share" 
                    allowfullscreen 
                    loading="lazy"></iframe>
        </div>
        <section class="section" id="contacts">
            <h2>Контактная информация</h2>
            <p>Наши контакты...</p>
            <a href="contacts.html">Подробнее</a>
        </section>
    </main>
    <footer class="site-footer">
        <div class="container">
            <p>&copy; 2025 Название вашего сайта. Все права защищены.</p>
            <p>Телефон: +7 (123) 456-78-90</p>
        </div>
    </footer>
</body>
</html>
