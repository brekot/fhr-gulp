import { Fancybox } from "@fancyapps/ui";

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