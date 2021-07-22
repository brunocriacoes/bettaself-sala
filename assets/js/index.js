

const $button_init = document.querySelector('.js-button-init');

$button_init.addEventListener( 'click', function(){
    
    const domain = '8x8.vc';
    const options = {
        roomName: 'vpaas-magic-cookie-8edd1df584dc41e290c3be7af193cc3c/014b61-SAMPLE_APP',
        jwt: 'eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtOGVkZDFkZjU4NGRjNDFlMjkwYzNiZTdhZjE5M2NjM2MvMDE0YjYxLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYyNjkxOTkyNiwibmJmIjoxNjI2OTEyNzIxLCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtOGVkZDFkZjU4NGRjNDFlMjkwYzNiZTdhZjE5M2NjM2MiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJjb250YXRvIiwiaWQiOiJhdXRoMHw2MGY4Nzk3ODdlY2NlMjAwNjkwYTQ2NGEiLCJhdmF0YXIiOiIiLCJlbWFpbCI6ImNvbnRhdG9AYmV0dGFzZWxmLmNvbS5iciJ9fX0.bYcTkPjs3nCm3TdRYhM7K1qk7siNuortH1hACJBkhS-41xwOXNZLB1cLxXjwzGCtb9bfDz0QQbMSuXj9OFk905CsM2BbUm_unP9wbzwqkHT5lkYwLjA4DgigaXF07_YPvE_s6QXhzml0JLwCksn_t2UBA-Tvq4VyvFE-6bCIXv5D9csV1U9qZObQtSeqJcj_pwQoZ2mpZrutAW_QU_cjSpGnc4Dbw7iyzv752GR-SBzOjtHVLSg2XAnuhIuq4mpJO2Wz4WUFHSK5HFmZI6cwEBFlgjluEJHRZBnEJ0rRfbY0Cfzrbb4XM0SpFRuWAH9TJBSXUSf7RSNupv2u7oPaqg',
        width: 700,
        height: 700,
        parentNode: document.querySelector('#meet')
    };
    globalThis.apiMeet = new JitsiMeetExternalAPI(domain, options);
} )
