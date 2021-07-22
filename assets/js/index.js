

const $button_init = document.querySelector('.js-button-init');
const $close_meet = document.querySelector('.js-close-meet')

function maker_jwt() {
    return "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtOGVkZDFkZjU4NGRjNDFlMjkwYzNiZTdhZjE5M2NjM2MvMDE0YjYxLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYyNjk5NzM3MiwibmJmIjoxNjI2OTkwMTY3LCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtOGVkZDFkZjU4NGRjNDFlMjkwYzNiZTdhZjE5M2NjM2MiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJjb250YXRvIiwiaWQiOiJhdXRoMHw2MGY4Nzk3ODdlY2NlMjAwNjkwYTQ2NGEiLCJhdmF0YXIiOiIiLCJlbWFpbCI6ImNvbnRhdG9AYmV0dGFzZWxmLmNvbS5iciJ9fX0.hSWEoc5JlTywgZSrP6mjGiBC3UMfxtRnK_n0fKQlWdXQY1f9g4tG1CuxF49ug9CIzCcG4Fk6J1dl1YEQolh4mRj16vRHZwZnmHbuWR6w_6YKKos6pzBGUJzfD3WuG5q487rq_AuroRNnh5XBS7rznhmHu9nOXnDCr9kuWGW-6wPl7QaQ1PVG_bsQmoXiGHk_6fkheInbArG_YzUHbVPY9ugQWZBeGxYqnYxrAUTnMEI4R9jCpjt8JaAUi13lw1duhzcdPAcJSqoWh5OA2yGvxz4WgNRUJluZqMY2c1G63w59iuII2942FIPsykSltXvnEGg_L4fUKmfDvjubc-8KPQ"
}

$button_init.addEventListener( 'click', function(){    
    const domain = '8x8.vc';
    const options = {
        roomName: 'vpaas-magic-cookie-8edd1df584dc41e290c3be7af193cc3c/014b61-SAMPLE_APP',
        jwt: maker_jwt(),
        width: 700,
        height: 700,
        parentNode: document.querySelector('#meet')
    };
    console.log(options)
    globalThis.apiMeet = new JitsiMeetExternalAPI(domain, options);
    document.querySelector('.js-box-meet').classList.add('active')
} )

$close_meet.addEventListener('click', function() {
    document.querySelector('.js-box-meet').classList.remove('active')
    document.querySelector('.js-box-meet iframe').remove()
})
