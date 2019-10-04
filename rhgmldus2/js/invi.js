Kakao.init('89ac0616962b31a5789c5844543aa037');

Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'feed',
    content: {
        title: '초대합니다',
        description: '2019년 9월 28일 토요일 6시\n엠블호텔 2층 쿠치나 M',
        imageUrl: 'https://studiopiri.github.io/sample/rhgmldus2/img/pix_img_kakao.png?v=1',
        link: {
            mobileWebUrl: 'https://studiopiri.github.io/sample/rhgmldus2/',
            webUrl: 'https://studiopiri.github.io/sample/rhgmldus2/'
        }
    },

    buttons: [
        {
            title: '초대장 보러가기',
            link: {
                mobileWebUrl: 'https://studiopiri.github.io/sample/rhgmldus2/',
                webUrl: 'https://studiopiri.github.io/sample/rhgmldus2/'
            }
        },

    ]
});

