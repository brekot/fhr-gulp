import { Fancybox } from "@fancyapps/ui";

/* Проверка возможности использования webp */
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