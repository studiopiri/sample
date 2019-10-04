Kakao.init('89ac0616962b31a5789c5844543aa037');

Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'feed',
    content: {
        title: '초대합니다',
        description: '2019년 9월 28일 토요일 6시\n잭슨나인스 2층 스카이룸',
        imageUrl: 'https://studiopiri.github.io/sample/ehf4/img/img_kakao.png?v=1',
        link: {
            mobileWebUrl: 'https://studiopiri.github.io/sample/ehf4/',
            webUrl: 'https://studiopiri.github.io/sample/ehf4/'
        }
    },

    buttons: [
        {
            title: '초대장 보러가기',
            link: {
                mobileWebUrl: 'https://studiopiri.github.io/sample/ehf4/',
                webUrl: 'https://studiopiri.github.io/sample/ehf4/'
            }
        },

    ]
});

