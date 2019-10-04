Kakao.init('89ac0616962b31a5789c5844543aa037');

Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'feed',
    content: {
        title: '결혼합니다',
        description: '2019년 5월 11일 토요일 낮 11시\n엠시티웨딩컨벤션 B1 오페라웨딩홀',
        imageUrl: 'https://studiopiri.github.io/sample/dnfl4/img/pix_img_kakao.png?v=1',
        link: {
            mobileWebUrl: 'https://studiopiri.github.io/sample/dnfl4/',
            webUrl: 'https://studiopiri.github.io/sample/dnfl4/'
        }
    },

    buttons: [
        {
            title: '청첩장 보러가기',
            link: {
                mobileWebUrl: 'https://studiopiri.github.io/sample/dnfl4/',
                webUrl: 'https://studiopiri.github.io/sample/dnfl4/'
            }
        },

    ]
});

