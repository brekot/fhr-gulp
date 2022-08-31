import { Fancybox } from "@fancyapps/ui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Проверка возможности использования webp
function canUseWebp()
{
    let elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d')))
    {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    return false;
}

if (canUseWebp()) document.body.classList.add('can-use-webp');
else document.body.classList.add('not-use-webp');

// Кнопка Копировать
document.querySelector('.copy-link').addEventListener('click', function() {

    var elem = document.createElement("input");

    document.body.appendChild(elem);

    elem.value = location.href;
        
    elem.select();

    document.execCommand("copy");

    elem.remove();
});

// Прокрутка Наверх
document.getElementById('to-top').addEventListener('click', function() {

	window.scrollTo({top: 0, behavior: 'smooth'});
});


// Галерея
document.querySelector('.js-show-gallery').addEventListener('click', function() {

    Fancybox.show([
        {
        src: "local/img/gallery/01.jpg",
        caption: "Алексей Хомич (слева, рядом с главным тренером сборной СССР в Суперсерии-72 Всеволодом Бобровым), знаменитый вратарь послевоенного футбольного «Динамо», один из героев легендарного турне по Великобритании осенью 1945 года, по окончании карьеры пошел фотокорреспондентом в еженедельник «Футбол-Хоккей», где трудился почти двадцать лет, сохраняя для истории наиболее памятные спортивные события. Работал он и на матчах Суперсерии в Лужниках",
        },
        {
        src: "local/img/gallery/02.jpg",
        caption: "Исторический момент: канадский флаг под сводами «Лужников»",
        },
        {
        src: "local/img/gallery/03.jpg",
        caption: "Советские болельщики и раньше видели канадцев, но таких – никогда",
        },
        {
        src: "local/img/gallery/04.jpg",
        caption: "Лидер сборной Канады Фил Эспозито. Помешать ему организовать очередную атаку пытается Евгений Мишаков, встретить грозного форварда готов Александр Мартынюк",
        },
        {
        src: "local/img/gallery/05.jpg",
        caption: "Младший из братьев Эспозито, Тони, защищал ворота. В этом эпизоде давление на них оказывают Владимир Шадрин и Юрий Ляпкин (№ 25), помогает голкиперу Серж Савар",
        },
        {
        src: "local/img/gallery/06.jpg",
        caption: "Стиль баттерфляй в исполнении другого вратаря канадцев – Кена Драйдена. Они с Эспозито посменно провели в Суперсерии по четыре матча",
        },
        {
        src: "local/img/gallery/07.jpg",
        caption: "Охрану ворот сборной СССР тренеры во всех матчах доверяли Владиславу Третьяку. В этом эпизоде он отражает угрозу со стороны Рода Жильбера",
        },
        {
        src: "local/img/gallery/08.jpg",
        caption: "Эмоции руководителей советского хоккея: председатель Президиума Федерации Георгий Мосолов широко улыбается, председатель Спорткомитета Сергей Павлов (слева) задумчив",
        },
        {
        src: "local/img/gallery/09.jpg",
        caption: "Некоторым зрителям было чем занять себя в перерыве",
        },
        {
        src: "local/img/gallery/10.jpg",
        caption: "Если поначалу послематчевые рукопожатия были для канадцев неожиданностью, то в московской части Суперсерии они уже превратились в привычный ритуал. Владимир Викулов, Владимир Шадрин, Александр Сидельников, Валерий Харламов, Александр Гусев, Владислав Третьяк",
        },
        {
        src: "local/img/gallery/11.jpg",
        caption: "Появление Фила Эспозито вблизи ворот Владислава Третьяка всегда опасно. Владимир Лутченко начеку",
        },
        {
        src: "local/img/gallery/12.jpg",
        caption: "С 13 очками (7+6) Эспозито стал лучшим бомбардиром Суперсерии. Был он всегда готов оказать и психологическое воздействие на соперника. Впрочем, Александра Рагулина это, похоже, не смущало",
        },
        {
        src: "local/img/gallery/13.jpg",
        caption: "В составе сборной СССР самым результативным стал Александр Якушев – 11 очков (7+4)",
        },
        {
        src: "local/img/gallery/14.jpg",
        caption: "В атаку идет Вячеслав Анисин",
        },
        {
        src: "local/img/gallery/15.jpg",
        caption: "Александра Мальцева встречают Пэт Стэплтон (№ 3) и Деннис Халл",
        },
        {
        src: "local/img/gallery/16.jpg",
        caption: "Владимир Викулов, на заднем плане – Пит Маховлич",
        },
        {
        src: "local/img/gallery/17.jpg",
        caption: "Александр Волчков",
        },
        {
        src: "local/img/gallery/18.jpg",
        caption: "Юрий Блинов. Слева – Иван Курнуайе, справа – Билл Уайт",
        },
        {
        src: "local/img/gallery/19.jpg",
        caption: "Александр Гусев и Деннис Халл",
        },
        {
        src: "local/img/gallery/20.jpg",
        caption: "Валерий Харламов, Геннадий Цыганков, Бобби Кларк, Александр Мальцев, Деннис Халл. Эпизод из шестой игры, в которой Кларк травмировал Харламова",
        },
        {
        src: "local/img/gallery/21.jpg",
        caption: "Седьмую игру Харламову пришлось пропустить, и его место в тройке с Владимиром Петровым и Борисом Михайловым занял Юрий Блинов",
        },
        {
        src: "local/img/gallery/22.jpg",
        caption: "Юрий Ляпкин, Борис Михайлов и Бобби Кларк",
        },
        {
        src: "local/img/gallery/23.jpg",
        caption: "Борис Михайлов и Гэри Бергман",
        },
        {
        src: "local/img/gallery/24.jpg",
        caption: "Евгений Мишаков",
        },
        {
        src: "local/img/gallery/25.jpg",
        caption: "Воздушный пируэт Владимира Петрова",
        },
        {
        src: "local/img/gallery/26.jpg",
        caption: "Воздушный пируэт Жан-Поля Паризе",
        },
        {
        src: "local/img/gallery/27.jpg",
        caption: "Геннадий Цыганков и Бобби Кларк",
        },
        {
        src: "local/img/gallery/28.jpg",
        caption: "Владимир Шадрин и Фил Эспозито",
        },
        {
        src: "local/img/gallery/29.jpg",
        caption: "Трехкратные олимпийские чемпионы, будущий и действующий – Владислав Третьяк и Виктор Кузькин",
        },
        {
        src: "local/img/gallery/30.jpg",
        caption: "Так распорядилась жизнь, что в двух последних матчах победные голы в концовке за канадцев забивал Пол Хендерсон. Бурная радость гостей показывает, какими титаническими усилиями был достигнут этот успех",
        },
        {
        src: "local/img/gallery/31.jpg",
        caption: "Это было великолепно! Председатель Президиума Федерации хоккея СССР Георгий Мосолов и исполнительный директор ассоциации игроков НХЛ Алан Иглсон благодарят друг друга за проделанную работу. Ее плоды остались в истории мирового спорта навсегда",
        },
    ]);
});

// Анимация
if (window.innerWidth > 991)
{
    document.body.classList.add('body-hide');

    window.addEventListener("load", function() {

        document.body.classList.remove('body-hide');

        gsap.timeline({ defaults: { duration: 1, opacity: 0 } })
            .from(".block1__img1", { x: -600 })
            .from(".block1__img2", { x: 600 }, "<")
            .from(".block1__img3", { x: -600, delay: .5 }, "-=1")
            .from(".block1__img4", { x: 600 }, "-=1")
            .from(".block1__logo", { scale: 0 }, "-=0.5")
            .from(".header__logo", { duration: 2  }, "-=1")
            .from(".block1__text", { scale: 0 }, "<");

        gsap.timeline({scrollTrigger: { trigger: ".block2", start: "top 90%", end: "bottom 20%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 2 }})
            .from(".block2__img", { y: 200 });

        gsap.timeline({scrollTrigger: { trigger: ".block3", start: "top 90%", end: "bottom 10%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block3__word", { x: -600 })
            .from(".block3__year", { x: -600 });

        gsap.timeline({scrollTrigger: { trigger: ".block4", start: "top 90%", end: "bottom 10%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block4__img", { scale: 0 });

        gsap.timeline({scrollTrigger: { trigger: ".block5", start: "top 60%", end: "bottom 0%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block5__glob", { scale: .7 })
            .from(".block5__img1", { x: -200 })
            .from(".block5__img2", { x: 200, delay: .2 }, "<");

        gsap.timeline({scrollTrigger: { trigger: ".block6", start: "top 100%", end: "bottom 20%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block6__img", { x: -200 });

        gsap.timeline({scrollTrigger: { trigger: ".block7", start: "top top", end: "bottom -233px", pin: ".block7__bg", pinSpacing: false, scrub: true }});

        gsap.timeline({scrollTrigger: { trigger: ".block7", start: "top top", end: "bottom -233px", scrub: true }})
            .to(".block7__bg", { y: '-50%' })

        gsap.timeline({scrollTrigger: { trigger: ".block8", start: "top 100%", end: "bottom 20%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block8__img", { y: 200 });

        gsap.timeline({scrollTrigger: { trigger: ".block9", start: "top 90%", end: "bottom 20%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block9__img", { scale: .7 });

        gsap.timeline({scrollTrigger: { trigger: ".block10", start: "top 60%", end: "bottom 0%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block10__img3", { x: -200 })
            .from(".block10__img4", { x: 200 }, "<")
            .from(".block10__img1", { y: 200 })
            .from(".block10__img2", { y: 200 }, "<");

        gsap.timeline({scrollTrigger: { trigger: ".block11", start: "top 90%", end: "bottom 20%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block11__glob", { scale: .7 })
            .from(".block11__img1", { x: 200 })
            .from(".block11__img2", { x: 200 })
            .from(".block11__img3", { scale: .7 });

        gsap.timeline({scrollTrigger: { trigger: ".block13", start: "top 80%", end: "bottom 20%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block13__img", { x: -200 });

        gsap.timeline({scrollTrigger: { trigger: ".block14", start: "top top", end: "bottom -233px", pin: ".block14__bg", pinSpacing: false, scrub: true }});

        gsap.timeline({scrollTrigger: { trigger: ".block14", start: "top top", end: "bottom -233px", scrub: true }})
            .to(".block14__bg", { y: '-50%' })

        gsap.timeline({scrollTrigger: { trigger: ".block15", start: "top 40%", end: "bottom 0%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block15__img", { y: 200 });

        gsap.timeline({scrollTrigger: { trigger: ".block16", start: "top 80%", end: "bottom 20%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block16__img", { x: -200 });

        gsap.timeline({scrollTrigger: { trigger: ".block17", start: "top 90%", end: "bottom 20%"/*, scrub: true*/ }, defaults: { opacity: 0, ease: "power3.inOut", duration: 1.5 }})
            .from(".block17__img", { y: 200 });
    });
}